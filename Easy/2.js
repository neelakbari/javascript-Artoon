const toArray = (object) => {
    const result = Object.entries(object);
    return result;
};
console.log(toArray({ a: 1, b: 2 }));
console.log(toArray({ shrimps: 15, tots: 12 }));
console.log(toArray({}));
