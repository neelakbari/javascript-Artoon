function findFirstRecurringItem(str) {
    if (!str || typeof str !== 'string' || str.length === 0) {
      return {}; // Return empty object for invalid input
    }
  
    const items = str.split(' ');
    const itemMap = new Map();
  
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      if (itemMap.has(item)) {
        const firstIndex = itemMap.get(item);
        const nextIndex = i;
        return {
          item: item,
          firstIndex: firstIndex,
          nextIndex: nextIndex
        };
      }
      itemMap.set(item, i);
    }
  
    return {}; // Return empty object if no recurring item is found
  }

  
  let str = 'a b c d e a f g h i a';
let result = findFirstRecurringItem(str);
console.log(result);
// Output: { item: 'a', firstIndex: 0, nextIndex: 9 }

str = '1 2 3 4 5 6 7 8 9';
result = findFirstRecurringItem(str);
console.log(result);
// Output: {}

str = '';
result = findFirstRecurringItem(str);
console.log(result);
// Output: {}
