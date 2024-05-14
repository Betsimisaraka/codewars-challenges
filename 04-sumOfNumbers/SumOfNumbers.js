// 01
function getSum(a, b) {
    let result = 0;
    let min = Math.min(a, b)
    let max = Math.max(a, b)
    
    for (let i = min; i <= max; i++) {
      result += i;
    }
    return result
  }

  // 02
  function GetSum( a,b ) {
    var result = 0;
    var bigger = a > b ? a : b;
    var smaller = a > b ? b : a;
    for (var i = smaller; i <= bigger; i++) { result += i }
    return result
 }

 // 03

 const GetSum = (a, b) => {
  let min = Math.min(a, b),
      max = Math.max(a, b);
  return (max - min + 1) * (min + max) / 2;
}

//  In this example, 
// the Math.min(start, end) call gets the smaller of the two numbers, 
// and the Math.max(start, end) call gets the larger of the two numbers. 
// The for loop then iterates over all the integers from the smaller number to the larger number, 
// and the sum += i statement adds the current integer i to the sum.