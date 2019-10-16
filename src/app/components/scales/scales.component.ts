import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { ScalesBasic } from '../../models/scales.model'
import { ScalesService } from '../../services/scales.service'
import { Observable, BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-scales',
  templateUrl: './scales.component.html',
  styleUrls: ['./scales.component.scss']
})
export class ScalesComponent implements OnInit {
  selectedScale: string;
  // sacles: ScalesBasic;
  @Output() selectedScaleEmit = new EventEmitter();
  @Input() scaleTypeChoice: string;

  scaleStream: Observable<ScalesBasic[]>;
  currentScale: ScalesBasic[];
  subject: any;

  constructor(private scales: ScalesService) {
    // this.scaleType = this.scales.getBasicBluesScales();
    //this.scaleType = this.changeScaleType(this.scaleTypeChoice)
    //this.scaleType = this.test(this.scaleTypeChoice);
    //console.log(this.scaleTypeChoice);
   
    
    this.selectedScale = 'CM'; //Setting the default scale to C Maj

    this.scales.getCurrentScaleStream()
      .subscribe(newScale => {
        this.currentScale = newScale;
      });

  }

  ngOnInit() { }

  emitSelectedScale() {
    //Add scales obj to models so to create interface to avoid red underlines
    let selectedScaleArray = this.currentScale.find(s => s.id === this.selectedScale);
    //console.log(this.scales.scaleTypeState);

   // console.log(this.scaleTypeChoice);

   this.selectedScaleEmit.emit(selectedScaleArray.scale)
  }

}
