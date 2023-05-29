const allAboutStrings = (string) => {
    let result = [];
    //   let textStart = string.length / 2 - 1;
    result.push(string.length);
    result.push(string.slice(0, 1));
    result.push(string.slice(-1));
    if (string.length % 2 === 0) {
      // console.log(textStart);
      result.push(string.substr(string.length / 2 - 1, 2));
    } else {
      result.push(string.substr(string.length / 2, 1));
    }
  
  
    let findOccurenceElement = string[1];
    if (
      string.indexOf(findOccurenceElement) !=
      string.lastIndexOf(findOccurenceElement)
    ) {
      result.push(`@ index ${string.lastIndexOf(findOccurenceElement)}`);
    } else {
      result.push("not found");
    }
  
  
    return result;
  };
  console.log(allAboutStrings("LASA"));
  console.log(allAboutStrings("Computer"));
  console.log(allAboutStrings("Science"));