import { Component } from '@angular/core';
import * as Tone from 'tone';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'undaTuner';
  synth: any;
  notes: Array<string>;

  constructor()
  {
    //create a synth and connect it to the master output (your speakers)
    this.synth = new Tone.Synth().toMaster();
    //play a middle 'C' for the duration of an 8th note
   // this.synth.triggerAttackRelease("C4", "8n");
   
    

    
  }


  onClick(note:string) {

    var log = this.synth.triggerAttackRelease(note, '8n');
    console.log(log);
  }

  async scale(scaleType: string) {

    var scaleArray : string[][] = [];
    
    switch (scaleType){
      case 'CM': 
      scaleArray =[['C4','8n'],['D4','8n'],['E4','8n'],['F4','8n'],['G4','8n'],['A4','8n'],['B4','8n'],['C5','8n'] ]
      break;
      //minor
      case 'Cm':
      scaleArray =[['C4','8n'],['D4','8n'],['D#4','8n'],['F4','8n'],['G4','8n'],['G#4','8n'],['a#4','8n'],['C5','8n'] ]
      break;
    }
   

    for(var note of scaleArray){

      this.synth.triggerAttackRelease(note[0], note[1]);

      await this.delay(500);
    };
  }
 
  delay(ms: number){
    return new Promise(resolve => setTimeout(resolve, ms));
  }







}
