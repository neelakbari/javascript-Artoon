const number_of_digit = (num) => {
  let result = 0;
  if (num < 0) {
    return "enter a positive number";
  } else if (num == 0) {
    return (result + 1).toFixed();
  } else {
    while (num >= 1) {
      num = num / 10;
      result++;
    }
    return result.toFixed();
  }
};

console.log(number_of_digit(1000));
console.log(number_of_digit(12));
console.log(number_of_digit(1305981031));
console.log(number_of_digit(0));
