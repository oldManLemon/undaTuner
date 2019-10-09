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

  constructor() {
    //create a synth and connect it to the master output (your speakers)
    this.synth = new Tone.Synth().toMaster();

    this.scale = ['C', 'D', 'E', 'F', 'G', 'A', 'B']; //0 place and increase range!
  }


  onClick(note: number, range: number) {


    console.log(`Playing: ${this.scale[note]}${range}`);

    this.synth.triggerAttackRelease(this.scale[note] + range, '8n');
  }

  async selectScale(scaleType: string) {

    switch (scaleType) {
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


    for (var note of this.scale) {

      this.synth.triggerAttackRelease(note+4, '8n');

      await this.delay(500);
    };
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }







}
