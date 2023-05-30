const findNaN = (array) => {
  let result;
  for (let index = 0; index < array.length; index++) {
    if (isNaN(array[index])) {
      return index;
    } else {
      result = -1;
    }
  }
  return result;
};

console.log(findNaN([1, 2, NaN]));
console.log(findNaN([NaN, 1, 2, 3, 4]));
console.log(findNaN([0, 1, 2, 3, 4]));
