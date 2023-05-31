const calculateScore = (arr) => {
  let Abigail = 0;
  let Benson = 0;
  arr.forEach((game) => {
    let [player1, player2] = game.map((res) => res.toUpperCase());
    
    switch (player1 + player2) {
      case "RP":
      case "SR":
      case "PS":
        Benson += 1;
        break;
      case "RS":
      case "SP":
      case "PS":
        Abigail += 1;
        break;
      default:
        break;
    }
  });
  if (Abigail > Benson) {
    return "Abigail";
  } else if (Benson > Abigail) {
    return "Benson";
  } else {
    return "Tie";
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
