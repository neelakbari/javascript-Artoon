const numInStr = (arr) => {
  let result = [];

  for (const number of arr) {
    if (/\d/.test(number)) {
      result.push(number);
    }
  }

  return result;
};

console.log(numInStr(["1a", "2b", "a", "b"]));
console.log(numInStr(["abc", "abc10"]));
console.log(numInStr(["abc", "ab10c", "a10bc", "bcd"]));
console.log(numInStr(["This is a test", "test1"]));
