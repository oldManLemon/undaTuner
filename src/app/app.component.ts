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
  scale: string[];
  range:number;
  //basics: basicFunctions



  constructor() {
    //create a synth and connect it to the master output (your speakers)
    this.synth = new Tone.Synth().toMaster();

    this.scale = ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C']; //0 place and increase range!
    this.range = 4; //Default Value
    
  }

  onClick(note: number, last?:number) {
    
    let range = this.range;
    if(last == 1){
      range++;
    }



    console.log(`Playing: ${this.scale[note]}${range}`);

    this.synth.triggerAttackRelease(this.scale[note] + range, '8n');
  }

  selectScale(scaleType: string) {

    switch (scaleType) {
      //Major
      case 'CM':
        this.scale = ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C'];
        break;
      //Minor 
      case 'Cm':
        this.scale = ['C', 'D', 'Eb', 'F', 'G', 'Ab', 'Bb', 'C'];
        break;
      case 'DM':
        this.scale = ['D', 'E', "F#", 'G', 'A', 'B', 'C#', 'D'];
        break;
      case 'Dm':
        this.scale = ['D', 'E', 'F', "G", 'A', 'Bb', 'C', 'D'];
        break;
      case 'EM':
        this.scale = ['E', 'F#', 'G#', 'A', 'B', 'C#', 'D#', 'E'];
        break;
      case 'Em':
        this.scale = ['E', 'F#', 'G', 'A', 'B', 'C', 'D', 'E'];
        break;
      case 'FM':
        this.scale = ['F', 'G', 'A', 'Bb', 'C', 'D', 'E', 'F'];
        break;
      case 'Fm':
        this.scale = ['F', 'G', 'Ab', 'Bb', 'C', 'Db', 'Eb', 'F'];
        break;
      case 'GM':
        this.scale = ['G', 'A', 'B', 'C', 'D', 'E', 'F#', 'G'];
        break;
      case 'Gm':
        this.scale = ['G', 'A', 'Bb', 'C', 'D', 'Eb', 'F', 'G'];
        break;
      case 'AM':
        this.scale = ['A', 'B', 'C#', 'D', 'E', 'F#', 'G#', 'A'];
        break;
      case 'Am':
        this.scale = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'A'];
      case 'BM':
        this.scale = ['B', 'C#', 'D#', 'E', 'F#', 'G#', 'A#', 'B'];
        break;
      case 'Bm':
        this.scale = ['B', 'C#', 'D', 'E', 'F#', 'G', 'A', 'B'];

    }
  }
  rangeSelector(range:number){
    //I can only hear C10 then anything above that I can't hear I don't know if that is my comp speakers
    //or if that is my hearing
    this.range = range;
  }

  async playScale() {

    //Catch if scale is greater than 8
    if (this.scale.length > 8) {
      return console.error('Basic Scales can not be more than 8 notes in length');

    }
    //Notes need to transpose up automatically upon reaching C unless C is the first note
    for (let note = 0, range = this.range, cPassed = 0; note < 8; note++) {
      
      if (this.scale[note] === 'C' || this.scale[note] === 'C#' || this.scale[note] === 'Cb') {
        //If C is passed check it off
        cPassed++; //Reduntent for now but can be used in future
        if (note != 0) {
          //Only when reaching the next C in the scale should the range be increased
          range++;
        }
      }

      this.synth.triggerAttackRelease(this.scale[note] + range, '8n');
      console.log(this.scale[note] + range)
      await this.delay(500);

    }

  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
 


 







}
