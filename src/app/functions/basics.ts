
export function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export function midScaleFinder(scale:String[]){
    // if scale has a c use basic method
    let length = scale.length;
    for(let note =0; note < length; note++ ){
      if (scale[note] === 'C' || scale[note] === 'C#' || scale[note] === 'Cb') {
        if (note != 0) {
          //Only when reaching the next C in the scale should the range be increased
          return note; //Return the index where C is
        }
      }else if(scale[note] === 'B' || scale[note] === 'B#' || scale[note] === 'Bb'){
        if (scale[note+1] != 'A' || scale[note+1] != 'A#' || scale[note+1] != 'Ab'){
          return note +1; //Rare, still needs plus 1 to account for missing C
        }else if(scale[note] === 'A' || scale[note] === 'A#' || scale[note] === 'Ab'){
          return note + 1; //Plus 1 is because you have to keep A and B in the same range
        }
      }
    }
  }
