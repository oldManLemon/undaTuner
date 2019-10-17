import { Component } from '@angular/core';
import * as Tone from 'tone';
import { delay, midScaleFinder, playSound } from './functions/basics';
import { scaleMidError, scaleNotEight } from './functions/errors'



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
  scaleTypeChoice: string;
  //basics: basicFunctions



  constructor() {
    //create a synth and connect it to the master output (your speakers)
    this.synth = new Tone.PolySynth().toMaster();

    this.scale = ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C']; //0 place and increase range!
    this.range = 4; //Default Value
    this.middleC = 7; //Default Value as Default Scale is C Major See above
    //this.scaleTypeChoice = 'basic';

  }

  selectScale(scale: string[]) {
    this.scale = scale;
    this.middleC = midScaleFinder(this.scale)
  }

  typeOfScale(scaleTypeName: string) {
    ///console.log(scaleTypeName);
    this.scaleTypeChoice = scaleTypeName;
    //console.log(this.scaleTypeChoice);
  }

  rangeSelector(range: number) {
    this.range = range;
  }


  playNote(pair: [string, number, number?]) {

    var note = pair[0];
    var index = pair[1];
    var localMidC = pair[2];
    let range = this.range;

    //Catch the scale error: Error reports in console and disables buttons
    if (scaleMidError(localMidC)) {
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
  playChord() {
    let chordArray = []
    let scaleOfDoom = this.scale;
    let lengthOfScale = this.scale.length;
    console.log(this.scale)
    for (let note = 0; note < lengthOfScale; note++) {
      if (note == 0 || note == 2 ||note == 4) {
        console.log(scaleOfDoom[note])
        chordArray.push(scaleOfDoom[note]);
      }
    }
    for(let i = 0; i< chordArray.length; i++){
      playSound(chordArray[i], this.range);
    }
  }
  async playScale() {
    let middleOfScale: number;
    //Catch if scale is greater than 8
    if (scaleNotEight(this.scale) == 800) { // see error codes
      return console.error('Basic Scales can not be more than 8 notes in length');
    }
    middleOfScale = midScaleFinder(this.scale);
    let lengthOfScale = this.scale.length;
    //Notes need to move up the range automatically
    for (let note = 0, range = this.range; note < lengthOfScale; note++) {
      if (note == middleOfScale) {
        range++;
      }
      this.synth.triggerAttackRelease(this.scale[note] + range, '8n');
      console.log(this.scale[note] + range);
      await delay(500);
    }
  }



}
