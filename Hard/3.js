function findandRemove(obj) {
  let result = {};

  for (let key in obj) {
    if (typeof obj[key] === "object") {
      result[key] = findandRemove(obj[key]);
      // console.log(result);
    } else {
      let parsedValue = parseFloat(obj[key]);
      if (!isNaN(parsedValue)) {
        result[key] = parsedValue;
      }
    }
  }

  return result;
}

console.log(
  findandRemove({
    bedroom: {
      slippers: "10000",
      piano: "550",
      call: "ver",
      travel: "world",
    },
  })
);
console.log(
  findandRemove({
    kitchen: {
      ["gold spoons"]: "10000",
      piano: "550",
      notes: "ga0r76",
    },
    cellar: {
      remainder: "dog",
      bottle: "750",
    },
  })
);
