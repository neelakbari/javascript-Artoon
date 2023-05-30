const depth = (arr) => {
  if (Array.isArray(arr)) {
    return 1 + Math.max(...arr.map((res)=>depth(res)));
  } else {
    return 0;
  }

  //   console.log(Math.max(0,...arr.map(depthh)));
};

console.log(depth([1, [2, [3, [5, [6]], 4]]]));
