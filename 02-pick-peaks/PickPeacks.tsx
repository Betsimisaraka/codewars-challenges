type TPickPeaks = {
  pos: number[];
  peaks: number[];
}

function pickPeaks(arr){
    var result: TPickPeaks = {pos: [], peaks: []};
    var pos;
    var peak;
    if(arr.length === 0) {return result;}
    
    arr.reduce((prev, curr, index) => {
      if(curr > prev) {
        pos = index;
        peak = curr;
      } else if(curr < prev && pos >= 0) {
        result.pos.push(pos);
        result.peaks.push(peak);
        pos = -1;
      }
      
      return curr;
    });
    
    return result;
  }