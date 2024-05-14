function solution(string) {
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    return string.split("").map(s => alphabet.includes(s) ? ` ${s}` : s).join("");
  }

  // complete the function
function solution(string) {
  return(string.replace(/([A-Z])/g, ' $1'));

}