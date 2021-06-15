import { SimpleChanges } from '@angular/core';
import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-element-type',
  templateUrl: './element-type.component.html',
  styleUrls: ['./element-type.component.css']
})
export class ElementTypeComponent implements OnChanges {

  @Input() element: string;
  url: string;

  constructor() { }

  ngOnChanges(simple: SimpleChanges): void {
      
      console.log(simple)
    // switch (this.element){ 
      //   case 'water':
      //   this.url = 'https://www.revivedwater.eu/sites/default/files/styles/col_/public/2017-08/krystian-tambur-101317.jpg?itok=3_-Ct8kV'
      // }
  }


}
