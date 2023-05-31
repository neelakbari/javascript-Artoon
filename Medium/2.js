const numInStr = (arr) => {
  let result = arr.filter((ele) => filtered(ele));

  //helper function
  function filtered(item) {
    if (item.includes(" ")) {
      item = item.split(" ").join("");
    }
    for (const element of item) {
      if (!isNaN(element)) {
        return true;
      }
    }
    return false;
  }
  return result;
};

console.log(numInStr(["1a", "2b", "a", "b"]));
console.log(numInStr(["abc", "abc10"]));
console.log(numInStr(["abc", "ab10c", "a10bc", "bcd"]));
console.log(numInStr(["This is a test", "test1"]));
