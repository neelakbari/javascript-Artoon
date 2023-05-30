function applyGravity(array) {
  const rows = array.length;
  const cols = array[0].length;

  // Step 1: Shift the elements in each column towards the bottom
  const gravityApplied = Array.from({ length: cols }, (_, colIndex) => {
    const column = array.map((row) => row[colIndex]);
    const emptySpaces = rows - column.filter((cell) => cell === "#").length;
    const shiftedColumn = Array(emptySpaces)
      .fill("-")
      .concat(column.filter((cell) => cell === "#"));
    return shiftedColumn;
  });

  // Step 2: Transpose the array back to the original orientation
  const finalArray = Array.from({ length: rows }, (_, rowIndex) =>
    Array.from(
      { length: cols },
      (_, colIndex) => gravityApplied[colIndex][rowIndex]
    )
  );

  return finalArray;
}

// Example usage
const array = [
  ["-", "#", "#", "-"],
  ["-", "#", "#", "-"],
  ["-", "-", "-", "-"],
  ["-", "-", "-", "-"],
];
const array2 = [
  ["-", "#", "#", "#", "#", "-"],
  ["#", "-", "-", "#", "#", "-"],
  ["-", "#", "-", "-", "-", "-"],
  ["-", "-", "-", "-", "-", "-"],
];

const result = applyGravity(array2);
for (const row of result) {
  console.log(JSON.stringify(row));
}
