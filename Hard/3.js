const findandRemove = (object) => {
    let arr = Object.values(object);
    for (const key of arr) {
      console.log(key)
    }
    //   console.log(arr);
    return true;
  };
  
  
  console.log(
    findandRemove({
      bedroom: {
        slippers: "10000",
        piano: "550",
        call: "ver",
        travel: "world",
      },
      cellar: {
        reminder: "dog",
        bottle: "750",
      },
    })
  );