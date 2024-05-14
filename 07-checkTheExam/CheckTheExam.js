function checkExam(array1, array2) {
    let result = 0;
    
    for (let i = 0; i < array1.length; i++) {
        if (array2[i] === '') {
          result += 0
        } else if (array1[i] === array2[i]) {
          result += 4;
        } else {
          result -= 1;
        }
    }
    return result < 0 ? 0 : result;
  }


  function checkExam(array1, array2) {
    const reducer = (a, e, idx) => {
      if (e === "") {
        return a;  
      }
      
      if (e === array1[idx]) {
        return a += 4;
      }
      
      return --a;
    }
    const score = array2.reduce(reducer, 0);
    return score < 0 ? 0 : score;
  }