const sevenBoom = (array) =>
  array
    .join("")
    .split("")
    .filter((num) => parseInt(num) === 7).length
    ? "Boom"
    : "Error there is no 7 in the array";

// sevenBoom([1, 2, 3, 4, 5, 6, 7]);
console.log(sevenBoom([1, 2, 3, 4, 5, 6, 7]));
console.log(sevenBoom([8, 6, 33, 100]));
console.log(sevenBoom([2, 55, 60, 97, 86]));
