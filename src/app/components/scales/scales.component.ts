import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {ScalesBasic} from '../../models/scales.model'
import { ScalesService } from '../../services/scales.service'

@Component({
  selector: 'app-scales',
  templateUrl: './scales.component.html',
  styleUrls: ['./scales.component.scss']
})
export class ScalesComponent implements OnInit {
  selectedScale: string;
  sacles: ScalesBasic;
  scaleType: Array<ScalesBasic>;
  @Output() selectedScaleEmit = new EventEmitter();


  constructor(private scales:ScalesService) { 
    this.scales;
    this.scaleType = this.scales.getBasicBluesScales();
    this.selectedScale = 'CM'; //Setting the default scale to C Maj
  }
  
  ngOnInit() { 
    
    
  }

  emitSelectedScale(){

    
    //Add scales obj to models so to create interface to avoid red underlines
    let selectedScaleArray = this.scaleType.find(s => s.id === this.selectedScale);
    //console.log(selectedScaleArray);
    
    

    this.selectedScaleEmit.emit(selectedScaleArray.scale)
  }

}
