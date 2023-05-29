let depth = 0;
const depthh = (arr) => {
  if (Array.isArray(arr)) {
    return 1 + Math.max(0, ...arr.map(depthh));
  } else {
    return 0;
  }


  //   console.log(Math.max(0,...arr.map(depthh)));
};


console.log(depthh([1, [2, [3,[5,[6]], 4]]]));