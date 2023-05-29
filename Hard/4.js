const number_pair = (string) => {
    let array = string.split(" ").slice(1);
    let requiredArray = array.map((res) => {
      return parseInt(res);
    });
    return requiredArray;
  };
  console.log(number_pair("7 1 2 1 2 1 3 2"));