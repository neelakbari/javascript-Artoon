function recurIndex(str) {
  if (typeof str !== "string" || str.length === 0) {
    return {}; // Return empty object for blank or null input
  }

  const items = str.split("");
  const itemMap = new Map();

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    if (itemMap.has(item)) {
      const firstIndex = itemMap.get(item);
      const nextIndex = i;
      return {
        [item]: [firstIndex, nextIndex],
      };
    }
    itemMap.set(item, i);
  }

  return {}; // Return empty object if no recurring item is found
}

console.log(recurIndex("DXTDXTXDTXD"));
console.log(recurIndex(""));
console.log(recurIndex(null));
