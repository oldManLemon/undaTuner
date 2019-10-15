import { Component, OnInit, } from '@angular/core';
import { ScaleTypes } from '../../models/scales.model'
import { ScalesService } from '../../services/scales.service'

@Component({
  selector: 'app-scaletype',
  templateUrl: './scaletype.component.html',
  styleUrls: ['./scaletype.component.scss']
})
export class ScaletypeComponent implements OnInit {

typeAvailable:Array<ScaleTypes>;

  constructor(private types:ScalesService) { 
    this.typeAvailable = types.getScaleTypes(); //Grab the model for the data
    //console.log(this.typeAvailable)

  }

  ngOnInit() {
  }
  printables(){
    console.log(this.typeAvailable)
  }

}
