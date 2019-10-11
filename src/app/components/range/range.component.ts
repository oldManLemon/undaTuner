import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-range',
  templateUrl: './range.component.html',
  styleUrls: ['./range.component.scss']
})
export class RangeComponent implements OnInit {
  @Output() selectedValue = new EventEmitter();
  selectedLevel: number;
  constructor(){ 
    this.selectedLevel = 4; //Force default selection here
  }
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
  ]; //Move this to a models folder
  ngOnInit(){}

  selected(){
    //console.log(this.selectedLevel);
    this.selectedValue.emit(this.selectedLevel)
  }

}
