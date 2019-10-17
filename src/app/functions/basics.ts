import * as Tone from 'tone';
let synth: any;

synth = new Tone.PolySynth().toMaster();

export function playSound(sound: string, range: number, length?: string) {
  if (length) {
    synth.triggerAttackRelease(sound + range, length);
  } else {
    synth.triggerAttackRelease(sound + range, '8n'); //Default length of 8n
  }

}


export function playChord(typeOfChord: string, scale: string[], range: number, playableNotes: any, length?: string) {
  let chordArray = []
  let strangeArray = playableNotes[0]; //Keeps acting as an object
  let arrayLength = playableNotes[0].length;
  let mid = midScaleFinder(scale);
  for (let i = 0; i < arrayLength; i++) {
    let x = strangeArray[i]
    if (mid <= x) {
     // console.log(scale[x + (range + 1)])
      chordArray.push(scale[x] + [range + 1]);
    } else {
     // console.log(scale[x + range])
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
