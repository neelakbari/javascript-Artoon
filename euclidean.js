// const getDistanceCalculator = (x1, y1) => {
//   return function (x2, y2) {
//     let distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
//     return distance.toFixed(1);
//   };
// };
// console.log(getDistanceCalculator(0, 0)(30, 5));

const gcd = (a, b) => {
  if (b == 0) {
    return a;
  } else {
    return gcd(b, a % b);
  }
};

console.log(gcd(104, 16));
