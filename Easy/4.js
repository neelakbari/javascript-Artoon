const multiply = (array) => {
  return function (number) {
    const result = array.map((response) => response * number);
    return result;
  };
};
console.log(multiply([1, 2, 3])(2));
console.log(multiply([4, 6, 5])(10));
console.log(multiply([1, 2, 3])(0));
