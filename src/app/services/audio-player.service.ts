import { Injectable } from '@angular/core';
import * as Tone from 'tone';

@Injectable({
  providedIn: 'root'
})
export class AudioPlayerService {

  private synth : any;

  constructor() {
    //create a synth and connect it to the master output (your speakers)
    this.synth = new Tone.PolySynth().toMaster();
  }

  triggerAttack(note: string, length: string){
    this.synth.triggerAttackRelease(note, length);
  }
}
