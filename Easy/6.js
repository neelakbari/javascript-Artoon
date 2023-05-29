const findNaN = (array) => {
  for (let index = 0; index < array.length; index++) {
    if (isNaN(array[index])) {
      return index;
    }
  }
};
console.log(findNaN([1, 2, NaN]));
