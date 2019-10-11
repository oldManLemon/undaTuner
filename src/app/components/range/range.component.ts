import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-range',
  templateUrl: './range.component.html',
  styleUrls: ['./range.component.scss']
})
export class RangeComponent implements OnInit {
//   range: Array<number>;
//   index: string;

  @Output() selectedValue = new EventEmitter();
//   constructor() {
//     this.range = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //Do I even need this
//   }

//   ngOnInit() {
//   }

// valueSent;
// rangeSelector;
//   onSelect() {
//     console.warn(this.valueSent)
//     console.error(this.rangeSelector)
//     console.log(`You have selected Value ${this.valueSent}`)
//     this.selected.emit(this.valueSent)
//   }




  constructor(){ }

  selectedLevel;
  data:Array<Object> = [
      {id: 0, name: "Low 0"},
      {id: 1, name: "Low 1"},
      {id: 2, name: "Low 2"},
      {id: 3, name: "Mid 3"},
      {id: 4, name: "Mid 4"},
      {id: 5, name: "Mid 5"},
      {id: 6, name: "High 6"},
      {id: 7, name: "High 7"},
      {id: 8, name: "High 8"},
      {id: 9, name: "Super 9"},
      {id: 10, name: "Super 10"},
  ];
  ngOnInit(){}

  selected(){
    console.log(this.selectedLevel);
    this.selectedValue.emit(this.selectedLevel)
  }

}
