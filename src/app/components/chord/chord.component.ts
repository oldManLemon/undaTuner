import { Component, OnInit, Input, EventEmitter,Output } from '@angular/core';
import { ChordTypes } from '../../models/scales.model'
import { ScalesService } from '../../services/scales.service'
import { playChord } from '../../functions/basics'
@Component({
  selector: 'app-chord',
  templateUrl: './chord.component.html',
  styleUrls: ['./chord.component.scss']
})
export class ChordComponent implements OnInit {
@Input() scale: string[] 
@Input() range: number;
//@Output() typeSelected = new EventEmitter<string>();


  chordsAvailable: Array<ChordTypes>;
  defaultSelection: string;
  

  constructor(private chords: ScalesService) {

    this.chordsAvailable = chords.getChords(); //Grab the model for the data
    //console.log(this.chordsAvailable)
  

   

    //console.log(this.typeAvailable[0]['id'])
    //this.defaultSelection = this.typeAvailable[0]['id'];
  }

  ngOnInit() { 
    
    
  }

  chordClick(id:string, chordSequence:number[]){
    //console.log(id);
    //console.log(chordSequence);
    playChord(id,this.scale,this.range,chordSequence);
    //playChord(typeOfChord: string, scale: string[], range: number, length?: string): void

  }
}
