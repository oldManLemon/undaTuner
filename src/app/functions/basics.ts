import * as Tone from 'tone';
import { ScalesService } from '../services/scales.service';
let synth: any;

synth = new Tone.PolySynth().toMaster();

export function playSound(sound: string, range: number, length?: string) {
  if (length) {
    synth.triggerAttackRelease(sound + range, length);
  } else {
    synth.triggerAttackRelease(sound + range, '8n'); //Default length of 8n
  }

}
export function trimScale(scale:Array<string>) {
  //probably doesn't need an application
 scale =  scale.slice(0,7);
  //console.log(scale);
  return scale
}
function scaleExtender(scale: Array<string>) {
  //Double the length of the scale
  //Maybe make into recurring function
  let longScale: string[];
  longScale = scale;
  let lengthOfScale = scale.length;
  for (let i = 1; i < lengthOfScale; i++) {
    //i is one to skip the first of the scale to avoid duplication ie ABCCDEF
    longScale.push(scale[i]);
  }
  return longScale;
}


export function playChord(typeOfChord: string, scale: string[], range: number, playableNotes: any, length?: string) {
  let chordArray = []
  let strangeArray = playableNotes[0]; //Keeps acting as an object
  let arrayLength = playableNotes[0].length;
  let scaleExtenderUsed = false;
let mid = midScaleFinder(scale);
  if (scale.length < 8) {
    
    scale = scaleExtender(scale);
    scaleExtenderUsed = true;
  }
  
  for (let i = 0; i < arrayLength; i++) {
    let x = strangeArray[i]
    if (mid <= x) {

      chordArray.push(scale[x] + [range + 1]);
    } else {

      chordArray.push(scale[x] + [range])
    }

  }

  console.info(`The Chord you play contains these notes ${chordArray}`)
  for (let i = 0; i < chordArray.length; i++) {
    playSound(chordArray[i], chordArray[i][0]);
  }
  
  
  
}



export function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export function midScaleFinder(scale: String[]) {
  // if scale has a c use basic method
  let length = scale.length;
  for (let note = 0; note < length; note++) {
    if (scale[note] === 'C' || scale[note] === 'C#' || scale[note] === 'Cb') {
      if (note != 0) {
        //Only when reaching the next C in the scale should the range be increased
        return note; //Return the index where C is
      }
    } else if (scale[note] === 'B' || scale[note] === 'B#' || scale[note] === 'Bb') {
      if (scale[note + 1] != 'A' || scale[note + 1] != 'A#' || scale[note + 1] != 'Ab') {
        return note + 1; //Rare, still needs plus 1 to account for missing C
      } else if (scale[note] === 'A' || scale[note] === 'A#' || scale[note] === 'Ab') {
        return note + 1; //Plus 1 is because you have to keep A and B in the same range
      }
    }
  }
}
