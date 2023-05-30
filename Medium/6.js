const missing = (arr1, arr2) => {
  let result;
  for (element of arr1) {
    for (ele of arr2) {
      if (arr2.includes(element)) {
        // result = ele;
      } else {
        result = element;
      }
    }
  }
  return result;
};
console.log(missing([1, 2, 3, 4, 5, 6, 7, 8], [1, 3, 4, 5, 6, 7, 8]));

console.log(
  missing(["Jane", "is", "pretty", "ugly"], ["Jane", "is", "pretty"])
);
