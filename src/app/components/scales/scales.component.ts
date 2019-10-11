import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scales',
  templateUrl: './scales.component.html',
  styleUrls: ['./scales.component.scss']
})
export class ScalesComponent implements OnInit {

  constructor() { }
  scales: Array<object> = [

    {id: 'CM', name: "C Major", scale: ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C']},
      {id: 'Cm', name: "C Minor", scale: ['C', 'D', 'Eb', 'F', 'G', 'Ab', 'Bb', 'C']},
      {id: 'DM', name: "D Major", scale: ['D', 'E', "F#", 'G', 'A', 'B', 'C#', 'D']},
      {id: 'DM', name: "D Minor", scale: ['D', 'E', 'F', "G", 'A', 'Bb', 'C', 'D']},
      {id: 'EM', name: "E Major", scale: ['E', 'F#', 'G#', 'A', 'B', 'C#', 'D#', 'E']},
      {id: 'Em', name: "E Minor", scale: ['E', 'F#', 'G', 'A', 'B', 'C', 'D', 'E']},
      {id: 'FM', name: "F Major", scale: ['F', 'G', 'A', 'Bb', 'C', 'D', 'E', 'F']},
      {id: 'Fm', name: "F Minor", scale: ['F', 'G', 'Ab', 'Bb', 'C', 'Db', 'Eb', 'F']},
      {id: 'GM', name: "G Major", scale: ['G', 'A', 'B', 'C', 'D', 'E', 'F#', 'G']},
      {id: 'Gm', name: "G Minor", scale: ['G', 'A', 'Bb', 'C', 'D', 'Eb', 'F', 'G']},
      {id: 'AM', name: "A Major", scale: ['A', 'B', 'C#', 'D', 'E', 'F#', 'G#', 'A']},
      {id: 'Am', name: "A Minor", scale: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'A']},
      {id: 'BM', name: "B Major", scale: ['B', 'C#', 'D#', 'E', 'F#', 'G#', 'A#', 'B']},
      {id: 'Bm', name: "B Minor", scale: ['B', 'C#', 'D', 'E', 'F#', 'G', 'A', 'B']}
    
  ]
  ngOnInit() {
  }

}
