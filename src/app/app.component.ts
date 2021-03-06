import { Component } from '@angular/core';
import { delay, midScaleFinder, playSound } from './functions/basics';
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

  constructor(private player : AudioPlayerService) {

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
      playSound(note, range, '8n');


    } else {
      console.log(`Playing: ${note}${range}`);
      playSound(note, range, '8n');

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
      playSound(this.scale[note], range);
      console.log(this.scale[note] + range);
      await delay(500);
    }
  }
}
