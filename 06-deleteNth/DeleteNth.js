function deleteNth(arr,x) {
    var cache = {};
    return arr.filter(function(n) {
      cache[n] = (cache[n]||0) + 1;
      return cache[n] <= x;
    });
  }


function deleteNth(arr,n){
    let counts = {}
    const result = arr.reduce((newArr, item) => {
      counts[item] = (counts[item] || 0) + 1;
      if (counts[item] <= n) {
        newArr.push(item);
      }
      return newArr;
    }, [])
    
    return result;
  }

//   In this example, arr.reduce((newArr, item) => { ... }, []) creates the new array. The counts[item] = (counts[item] || 0) + 1; statement increments the count for the current item in the counts object, or initializes it to 1 if it doesn't exist yet. If the count for the current item is 2 or less, the item is added to the new array with newArr.push(item);. The new array is then returned as the result of the reduce() call. The result is a new array that includes up to two occurrences of each item from the original array.

  function removeDuplicatesMoreThanTwice(arr) {
    let counts = {};
    let newArr = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (counts[arr[i]]) {
        if (counts[arr[i]] < 2) {
          newArr.push(arr[i]);
          counts[arr[i]]++;
        }
      } else {
        newArr.push(arr[i]);
        counts[arr[i]] = 1;
      }
    }
  
    return newArr;
  }
  
  let arr = [1, 2, 2, 3, 3, 3];
  let newArr = removeDuplicatesMoreThanTwice(arr);
  console.log(newArr); // [1, 2, 2, 3, 3]

//   In this example, the if (counts[arr[i]] < 2) check ensures that each item is only included in the new array up to two times. If an item has already been included two times, it is not included again. The result is a new array that includes up to two occurrences of each item from the original array.