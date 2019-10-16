import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { ScalesBasic } from '../models/scales.model'

@Injectable({
  providedIn: 'root'
})
export class ScalesService {
  
  subject : BehaviorSubject<any>;

  scaleTypeState: "basic" | "pent";
  currentScale: any[];

  constructor() {
    this.scaleTypeState = 'basic'; //default state
    this.currentScale = this.getCurrentScales();
    //this.scaleTypeToggleSystem(.scaleTypeState);
    this.subject = new BehaviorSubject(this.currentScale);
  }

  changeScaleTypeState(data: "basic" | "pent") {
    console.log(`Changed state to ${data}`)
    //this.scaleTypeToggleSystem(data);
    this.scaleTypeState = data;
    this.currentScale = this.getCurrentScales();
    // Notify everyone and notify with this.currentScale
    this.subject.next(this.currentScale);
  }

  getCurrentScaleStream() : Observable<ScalesBasic[]> {
    return this.subject;
  }

  getCurrentScales() {
    switch (this.scaleTypeState) {
      case 'basic':
        return this.getBasicScales();
      case 'pent':
        return this.getBasicBluesScales();
      default:
        return this.getBasicScales();
    }
  }

  getScaleTypes() {
    return [
      { id: 'basics', name: 'Basic Scales' },
      { id: 'pent', name: 'Pentatonic Blues' }
    ]
  }

  getBasicScales() {
    return [

      { id: 'CM', name: "C Major", scale: ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C'] },
      { id: 'Cm', name: "C Minor", scale: ['C', 'D', 'Eb', 'F', 'G', 'Ab', 'Bb', 'C'] },
      { id: 'DM', name: "D Major", scale: ['D', 'E', "F#", 'G', 'A', 'B', 'C#', 'D'] },
      { id: 'DM', name: "D Minor", scale: ['D', 'E', 'F', "G", 'A', 'Bb', 'C', 'D'] },
      { id: 'EM', name: "E Major", scale: ['E', 'F#', 'G#', 'A', 'B', 'C#', 'D#', 'E'] },
      { id: 'Em', name: "E Minor", scale: ['E', 'F#', 'G', 'A', 'B', 'C', 'D', 'E'] },
      { id: 'FM', name: "F Major", scale: ['F', 'G', 'A', 'Bb', 'C', 'D', 'E', 'F'] },
      { id: 'Fm', name: "F Minor", scale: ['F', 'G', 'Ab', 'Bb', 'C', 'Db', 'Eb', 'F'] },
      { id: 'GM', name: "G Major", scale: ['G', 'A', 'B', 'C', 'D', 'E', 'F#', 'G'] },
      { id: 'Gm', name: "G Minor", scale: ['G', 'A', 'Bb', 'C', 'D', 'Eb', 'F', 'G'] },
      { id: 'AM', name: "A Major", scale: ['A', 'B', 'C#', 'D', 'E', 'F#', 'G#', 'A'] },
      { id: 'Am', name: "A Minor", scale: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'A'] },
      { id: 'BM', name: "B Major", scale: ['B', 'C#', 'D#', 'E', 'F#', 'G#', 'A#', 'B'] },
      { id: 'Bm', name: "B Minor", scale: ['B', 'C#', 'D', 'E', 'F#', 'G', 'A', 'B'] }

    ]
  }

  getBasicBluesScales() {
    return [

      { id: 'CM', name: "C Major Pentatonic Blues", scale: ['C', 'D', 'Eb', 'E', 'G', 'A', 'C'] },
      { id: 'Cm', name: "C Minor Pentatonic Blues", scale: ['C', 'Eb', 'F', 'F#', 'G', 'Bb', 'C'] },
      { id: 'DM', name: "D Major Pentatonic Blues", scale: ['D', 'E', 'F', 'F#', 'A', 'B', 'D'] },
      { id: 'DM', name: "D Minor Pentatonic Blues", scale: ['D', 'F', 'G', 'G#', 'A', 'C', 'D'] },
      { id: 'EM', name: "E Major Pentatonic Blues", scale: ['E', 'F#', 'G', 'G#', 'B', 'C#', 'E'] },
      { id: 'Em', name: "E Minor Pentatonic Blues", scale: ['E', 'G', 'A', 'A#', 'B', 'D', 'E'] },
      { id: 'FM', name: "F Major Pentatonic Blues", scale: ['F', 'G', 'Ab', 'A', 'C', 'D', 'F'] },
      { id: 'Fm', name: "F Minor Pentatonic Blues", scale: ['F', 'Ab', 'Bb', 'B', 'C', 'Eb', 'F'] },
      { id: 'GM', name: "G Major Pentatonic Blues", scale: ['G, A, Bb, B, D, E, G'] },
      { id: 'Gm', name: "G Minor Pentatonic Blues", scale: ['G', 'Bb', 'C', 'C#', 'D', 'F', 'G'] },
      { id: 'AM', name: "A Major Pentatonic Blues", scale: ['A', 'B', 'C', 'C#', 'E', 'F#', 'A'] },
      { id: 'Am', name: "A Minor Pentatonic Blues", scale: ['A', 'C', 'D', 'D#', 'E', 'G', 'A'] },
      { id: 'BM', name: "B Major Pentatonic Blues", scale: ['B', 'C#', 'D', 'D#', 'F#', 'G#', 'B'] },
      { id: 'Bm', name: "B Minor Pentatonic Blues", scale: ['B', 'D', 'E', 'F', 'F#', 'A', 'B'] }

    ] //Difficulty here is there is sometimes not a middle C so will need to guess where that is. 
  }
}
