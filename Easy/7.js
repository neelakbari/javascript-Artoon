const factorChain = (array) =>{
    let result = false;
    for (let i = 0; i < array.length-1; i++) {
        if (array[i+1]%array[i]===0) {
            result = true;           
        }else{
            result= false;
        }
    }
    return result
}
// console.log(factorChain([1,2,4,8,16,32]));
// console.log(factorChain([1,1,1,1,1,1]));
console.log(factorChain([1,1,1,5,10,50]));
console.log(factorChain([2,4,6,7,12]));
console.log(factorChain([10,1]));