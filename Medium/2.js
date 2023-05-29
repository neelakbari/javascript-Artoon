const numInStr=(arr)=> {
    let result = [];
    
    for (let i = 0; i < arr.length; i++) {
      if (/\d/.test(arr[i])) {
        result.push(arr[i]);
      }
    }
    
    return result;
  }
  
  console.log(numInStr(["1a","2b","a","b"]))