const numInStr = (arr) => {
  let result = arr.filter((ele)=>{
    if (ele.includes(" ")) {
      ele= ele.split(" ").join("")
    }
    for(let i = 0;i<ele.length; i++){
      if(!isNaN( ele[i])){
        return true
      }
    }
    return false
  });
  return result;
};

console.log(numInStr(["1a", "2b", "a", "b"]));
console.log(numInStr(["abc", "abc10"]));
console.log(numInStr(["abc", "ab10c", "a10bc", "bcd"]));
console.log(numInStr(["This is a test", "test1"]));
