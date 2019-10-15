import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { ScaleTypes } from '../../models/scales.model'
import { ScalesService } from '../../services/scales.service'

@Component({
  selector: 'app-scaletype',
  templateUrl: './scaletype.component.html',
  styleUrls: ['./scaletype.component.scss']
})
export class ScaletypeComponent implements OnInit {
  @Output() typeSelected = new EventEmitter<string>();
  

typeAvailable:Array<ScaleTypes>;
defaultSelection: string;

  constructor(private types:ScalesService) { 
    this.typeAvailable = types.getScaleTypes(); //Grab the model for the data
    //console.log(this.typeAvailable)
    
  //console.log(this.typeAvailable[0]['id'])
  this.defaultSelection = this.typeAvailable[0]['id'];

  }

  ngOnInit() {
  }
  onSelect(data){
   this.typeSelected.emit(data)
  }

}
