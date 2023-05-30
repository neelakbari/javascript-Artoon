const getTotalPrice = (array) => {
  let result = 0;
  array.map(({ quantity, price }) => {
    result += quantity * price;
  });
  return result;
};

console.log(getTotalPrice([{ product: "Milk", quantity: 1, price: 1.5 }]));
console.log(
  getTotalPrice([
    { product: "Milk", quantity: 1, price: 1.5 },
    { product: "Cereals", quantity: 1, price: 2.5 },
  ])
);

console.log(getTotalPrice([{ product: "Milk", quantity: 3, price: 1.5 }]));
console.log(
  getTotalPrice([
    { product: "Milk", quantity: 1, price: 1.5 },
    { product: "Eggs", quantity: 12, price: 0.1 },
    { product: "Bread", quantity: 2, price: 1.6 },
    { product: "Cheese", quantity: 1, price: 4.5 },
  ])
);
