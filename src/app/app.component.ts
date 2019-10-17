import { Component } from '@angular/core';
<<<<<<< HEAD
import * as Tone from 'tone';
import { delay, midScaleFinder, playSound, playChord } from './functions/basics';
=======
import { delay, midScaleFinder } from './functions/basics';
>>>>>>> 8d05186002b0a926e63c2a46f23ca337e84ddc95
import { scaleMidError, scaleNotEight } from './functions/errors'
import { AudioPlayerService } from './services/audio-player.service';

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

<<<<<<< HEAD


  constructor() {
    //create a synth and connect it to the master output (your speakers)
    //this.synth = new Tone.PolySynth().toMaster();
=======
  constructor(private player : AudioPlayerService) {
>>>>>>> 8d05186002b0a926e63c2a46f23ca337e84ddc95

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

    this.scaleTypeChoice = scaleTypeName;

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
<<<<<<< HEAD
      playSound(note, range, '8n');
=======
      this.player.triggerAttack(note + range, '8n');
>>>>>>> 8d05186002b0a926e63c2a46f23ca337e84ddc95


    } else {
      console.log(`Playing: ${note}${range}`);
<<<<<<< HEAD
      playSound(note, range, '8n');
=======
      this.player.triggerAttack(note + range, '8n');
>>>>>>> 8d05186002b0a926e63c2a46f23ca337e84ddc95

    }
  }
  //Refactor this out to a range of chord structures
  // playChord() {
  //   let chordArray = []
  //   let scaleOfDoom = this.scale;
  //   let lengthOfScale = this.scale.length;
  //   console.log(this.scale)
  //   for (let note = 0; note < lengthOfScale; note++) {
  //     if (note == 0 || note == 2 || note == 4) {
  //       console.log(scaleOfDoom[note])
  //       chordArray.push(scaleOfDoom[note]);
  //     }
  //   }
  //   for (let i = 0; i < chordArray.length; i++) {
  //     playSound(chordArray[i], this.range);
  //   }
  // }
  
  

<<<<<<< HEAD
=======
  }
  playSound(sound) {
    this.player.triggerAttack(sound + this.range, '8n');
  }
>>>>>>> 8d05186002b0a926e63c2a46f23ca337e84ddc95

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
<<<<<<< HEAD
      playSound(this.scale[note], range);
=======
      this.player.triggerAttack(this.scale[note] + range, '8n');
>>>>>>> 8d05186002b0a926e63c2a46f23ca337e84ddc95
      console.log(this.scale[note] + range);
      await delay(500);
    }
  }
}
