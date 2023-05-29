const number_of_digit = (num) => {
  let result = 0;
  if (num < 0) {
    return "enter a positive number";
  } else {
    while (num > 1) {
      num = num / 10;
      result++;
    }
    return result;
  }
};

console.log(number_of_digit(1200054));
