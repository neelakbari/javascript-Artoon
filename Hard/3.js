function findandRemove(obj) {
  let result = {};

  for (let key in obj) {
    if (typeof obj[key] === 'object') {
      result[key] = findandRemove(obj[key]);
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
      cellar: {
        reminder: "dog",
        bottle: "750",
      },
    })
  );