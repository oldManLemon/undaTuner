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
  range: number;
  middleC: number;
  //basics: basicFunctions



  constructor() {
    //create a synth and connect it to the master output (your speakers)
    this.synth = new Tone.Synth().toMaster();

    this.scale = ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C']; //0 place and increase range!
    this.range = 4; //Default Value
    this.middleC = 7; //Default Value as Default Scale is C Major See above
  }

  onClick(note: number, last?: number) {

    let range = this.range;
    if (last == 1) {
      range++;
    }



    console.log(`Playing: ${this.scale[note]}${range}`);

    this.synth.triggerAttackRelease(this.scale[note] + range, '8n');
  }

  selectScale(pair: [string, string[]]) {

    switch (pair[0]) {
      //Major
      case 'CM':
        this.scale = ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C'];
        this.middleC = this.findTheMiddleC(this.scale);
        break;
      //Minor 
      case 'Cm':
        this.scale = ['C', 'D', 'Eb', 'F', 'G', 'Ab', 'Bb', 'C'];
        this.middleC = this.findTheMiddleC(this.scale);
        break;
      case 'DM':
        this.scale = ['D', 'E', "F#", 'G', 'A', 'B', 'C#', 'D'];
        this.middleC = this.findTheMiddleC(this.scale);
        break;
      case 'Dm':
        this.scale = ['D', 'E', 'F', "G", 'A', 'Bb', 'C', 'D'];
        this.middleC = this.findTheMiddleC(this.scale);
        break;
      case 'EM':
        this.scale = ['E', 'F#', 'G#', 'A', 'B', 'C#', 'D#', 'E'];
        this.middleC = this.findTheMiddleC(this.scale);
        break;
      case 'Em':
        this.scale = ['E', 'F#', 'G', 'A', 'B', 'C', 'D', 'E'];
        this.middleC = this.findTheMiddleC(this.scale);
        break;
      case 'FM':
        this.scale = ['F', 'G', 'A', 'Bb', 'C', 'D', 'E', 'F'];
        this.middleC = this.findTheMiddleC(this.scale);
        break;
      case 'Fm':
        this.scale = ['F', 'G', 'Ab', 'Bb', 'C', 'Db', 'Eb', 'F'];
        this.middleC = this.findTheMiddleC(this.scale);
        break;
      case 'GM':
        this.scale = ['G', 'A', 'B', 'C', 'D', 'E', 'F#', 'G'];
        this.middleC = this.findTheMiddleC(this.scale);
        break;
      case 'Gm':
        this.scale = ['G', 'A', 'Bb', 'C', 'D', 'Eb', 'F', 'G'];
        this.middleC = this.findTheMiddleC(this.scale);
        break;
      case 'AM':
        this.scale = ['A', 'B', 'C#', 'D', 'E', 'F#', 'G#', 'A'];
        this.middleC = this.findTheMiddleC(this.scale);
        break;
      case 'Am':
        this.scale = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'A'];
        this.middleC = this.findTheMiddleC(this.scale);
      case 'BM':
        this.scale = ['B', 'C#', 'D#', 'E', 'F#', 'G#', 'A#', 'B'];
        this.middleC = this.findTheMiddleC(this.scale);

        break;
      case 'Bm':
        this.scale = ['B', 'C#', 'D', 'E', 'F#', 'G', 'A', 'B'];
        this.findTheMiddleC(this.scale);
        break;

    }
  }
  rangeSelector(range: number) {
    //I can only hear C10 then anything above that I can't hear I don't know if that is my comp speakers
    //or if that is my hearing
    this.range = range;
  }

  findTheMiddleC(scale: Array<String>): number {
    //Error Handling
    if (scale.length > 8) {
      return 0; //Zero Index simply won't work
    }
    for (let i = 0; i < 8; i++) {
      if (scale[i] == 'C' || scale[i] == "C#" || scale[i] == 'Cb') {
        if (i != 0) {
          //this.middleC = i;
          return i; //Return the index where C is located
        }
      }
    }
  }


  playNote(pair: [string, number, number?]) {

    var note = pair[0];
    var index = pair[1];
    var localMidC = pair[2];
    let range = this.range;

    //Catch the scale error: Error reports in console and disables buttons
    if (this.scaleMidError(localMidC)) {
      return console.error(`An error has occured please chose another scale!`)
    }



    //sort out if range should be plus one or not
    if (index >= localMidC) {
      range++;
      console.log(`Playing: ${note}${range}`);
      this.synth.triggerAttackRelease(note + range, '8n');

    } else {
      console.log(`Playing: ${note}${range}`);
      this.synth.triggerAttackRelease(note + range, '8n');
    }
  }

  async playScale() {

    //Catch if scale is greater than 8
    if(this.scaleNotEight(this.scale)){
      return console.error('Basic Scales can not be more than 8 notes in length');
    }
    // if (this.scale.length > 8) {
    //   

    // }
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

//Error Catching and Handling

//Check if there is an error with the midC
scaleMidError(code: number) {
  if (code == 0) {
    return true;
  } else {
    return false;
  }
}
//If scale is larger than 8
scaleNotEight(scale: Array<string>){
 let legnth = scale.length;
 if(length > 8){
   return true; //It is too big for a basic scale!
 }else{
   return false; //It is a scale
 }
}









}
