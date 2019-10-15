
//Check if there is an error with the midC
export function scaleMidError(code: number) {
    if (code == 0) {
      return true;
    } else {
      return false;
    }
  }
  //If scale is larger than 8
  export function scaleNotEight(scale: Array<string>) {
    let length = scale.length;
  
    if (length > 8) {
      console.info('Scale is longer than 8 notes')
      return 800; //800 is too big and should break for now
    }else if(length < 8){
      console.info('Scale is shorter than 8 notes')
      return 801; //801 is ok should play, need a new method of finding c. 
    }
  }