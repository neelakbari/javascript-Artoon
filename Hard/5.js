const makeBox = (num) => {
  let pattern="";
  for (let i = 1; i <= num * num; i++) {
    if (i <= num || i > num * (num - 1) || i % num === 1 || i % num === 0) {
      pattern += '*';
    } else {
      pattern += ' ';
    }

    if (i % num === 0) {
      pattern += '\n';
    }
  }
    return pattern;
  };
  console.log(makeBox(7));