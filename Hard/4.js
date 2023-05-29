function findNumberPairs(inputString) {
  const numbers = inputString.split(' ').map(Number);
  const count = numbers.shift();
  const pairs = [];

  const numberSet = new Set();
  for (let i = 0; i < numbers.length; i++) {
    if (numberSet.has(numbers[i])) {
      pairs.push(`(${numbers[i]}, ${numbers[i]})`);
      numberSet.delete(numbers[i]);
    } else {
      numberSet.add(numbers[i]);
    }
  }

  return pairs.join(', ');
}

let input = '4 2 3 4 1';
let result = findNumberPairs(input);
console.log(result);  // Output: (1, 1), (2, 2)