const calculateScore = (arr) => {
    let Abigail = 0;
    let Benson = 0;
    arr.map((game) => {
      let final = game.map((res) => {
        return res.toUpperCase();
      });
      if (final[0] == "R" && final[1] == "P") {
        Benson += 1;
      } else if (final[0] == "R" && final[1] == "S") {
        Abigail += 1;
      } else if (final[0] == "S" && final[1] == "P") {
        Abigail += 1;
      } else if (final[0] == "S" && final[1] == "R") {
        Benson += 1;
      } else if (final[0] == "P" && final[1] == "R") {
        Abigail += 1;
      } else if (final[0] == "P" && final[1] == "S") {
        Benson += 1;
      }
    });
    if (Abigail > Benson) {
      return "Abigail";
    } else if (Abigail == Benson) {
      return "tie";
    } else {
      return "Benson";
    }
  };
  
  
  console.log(
    calculateScore([
      ["R", "P"],
      ["r", "S"],
      ["S", "P"],
    ])
  );
  console.log(
    calculateScore([
      ["R", "R"],
      ["S", "S"],
      ["P", "P"],
    ])
  );
  console.log(
    calculateScore([
      ["S", "R"],
      ["r", "S"],
      ["R", "R"],
    ])
  );