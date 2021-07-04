import { SimpleChanges } from '@angular/core';
import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-element-type',
  templateUrl: './element-type.component.html',
  styleUrls: ['./element-type.component.css']
})
export class ElementTypeComponent implements OnChanges {

  @Input() element: any;
  elements = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
      if(changes.element) {
        this.element.forEach(it => this.elements.push(it.type))
      }
  }

  getElement(name: string) : string {
    console.log(name)
    return 'Água';
  }


}
