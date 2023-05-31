function findLostElements(arr1, arr2) {
  const occurrences = {};

  for (let i = 0; i < arr1.length; i++) {
    const element1 = arr1[i];
    const element2 = arr2[i];

    if (occurrences.hasOwnProperty(element1)) {
      occurrences[element1]++;
    } else {
      occurrences[element1] = 1;
    }

    if (occurrences.hasOwnProperty(element2)) {
      occurrences[element2]--;
    } else {
      occurrences[element2] = -1;
    }
  }
  // console.log(occurrences);

  const lostElements = Object.keys(occurrences).filter(
    (element) => occurrences[element] >= 1
  );

  return lostElements;
}
console.log(
  findLostElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], [1, 4, 3, 5, 6, 7, 8])
);
console.log(
  findLostElements([true, true, false, false, true], [true, false, false, true])
);
console.log(
  findLostElements(["Jane", "is", "pretty", "ugly"], ["Jane", "is", "pretty"])
);
