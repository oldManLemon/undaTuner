import { Component } from '@angular/core';
import * as Tone from 'tone';
import { delay, midScaleFinder } from './functions/basics';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'unda Tuner';
  description = 'Tuner based on wave lengths. Currently only plays basic scales at you';
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

  selectScale(scale: string[]) {
    this.scale = scale;
    this.middleC = this.findTheMiddleC(this.scale)
  }

  rangeSelector(range: number) {
    //I can only hear C10 then anything above that I can't hear I don't know if that is my comp speakers
    //or if that is my hearing
    this.range = range;
  }

  findTheMiddleC(scale: Array<String>): number {
    //Error Handling
    if (scale.length > 8) {
      console.info('Scale is longer than 8 notes')
      return 800; //800 is too big and should break for now
    }else if(scale.length < 8){
      console.info('Scale is shorter than 8 notes')
      return 801; //801 is ok should play, need a new method of finding c. 
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
    let middleOfScale: number;
    //Catch if scale is greater than 8
    if (this.scaleNotEight(this.scale) == 800) { // see error codes
      return console.error('Basic Scales can not be more than 8 notes in length');
    }else if(this.scaleNotEight(this.scale) == 801){
      //console.log(this.midScaleFinder(this.scale))
       middleOfScale =  midScaleFinder(this.scale)
    }
    
    let lengthOfScale = this.scale.length;
    //console.log(`Middle of scale number ${middleOfScale}`)

   
    //Notes need to move up the range automatically
    for (let note = 0, range = this.range; note < lengthOfScale; note++) {
      if(note == middleOfScale){
       range++;
      }
      

      this.synth.triggerAttackRelease(this.scale[note] + range, '8n');
      console.log(this.scale[note] + range)
      await delay(500);
    }
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
  scaleNotEight(scale: Array<string>) {
    let length = scale.length;
  
    if (length > 8) {
      console.info('Scale is longer than 8 notes')
      return 800; //800 is too big and should break for now
    }else if(length < 8){
      console.info('Scale is shorter than 8 notes')
      return 801; //801 is ok should play, need a new method of finding c. 
    }
  }

  









}
