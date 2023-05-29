const sevenBoom = (array)=>{
    let result = "there is no 7 in the array";
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 7) {
            result = "Boom"
        }        
    }
    return result
}
console.log(sevenBoom([1,2,3,4,5,6,7]));