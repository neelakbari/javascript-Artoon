function findNumberPairs(inputString) {
  const numbers = inputString.split(" ").map(Number);
  //to remove first element
  numbers.shift();
  const result = [];
  const uniqueSet = new Set();
  for (const number of numbers) {
    if (uniqueSet.has(number)) {
      result.push(`(${number}, ${number})`);
      uniqueSet.delete(number);
    } else {
      uniqueSet.add(number);
    }
  }
  // console.log(result);
  return result.join(", ");
}

let input = "4 2 3 4 1 4 5 5";
let result = findNumberPairs(input);
console.log(result); // Output: (1, 1), (2, 2)
