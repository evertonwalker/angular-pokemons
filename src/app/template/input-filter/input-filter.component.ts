import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators'

@Component({
  selector: 'app-input-filter',
  templateUrl: './input-filter.component.html',
  styleUrls: ['./input-filter.component.css']
})
export class InputFilterComponent implements OnInit, OnDestroy {

  @Input() label: string = '';
  @Input() id: string = '';
  @Input() placeholder = '';
  @Input() type = '';

  @Output() textOnInput = new EventEmitter<string>();
  subjectToFilter = new Subject();
  subscribtions: Subscription[] = [];

  constructor() { }

  ngOnInit(): void {

    let sub = this.subjectToFilter.pipe(
      debounceTime(500),
      distinctUntilChanged(),
    ).subscribe((result: string) => this.textOnInput.emit(result))

    this.subscribtions.push(sub);
  }

  onKeyPress(term: string): void {
    this.subjectToFilter.next(term);
  }


  ngOnDestroy(): void {
    this.subscribtions.forEach(it => it.unsubscribe());
  }




}
