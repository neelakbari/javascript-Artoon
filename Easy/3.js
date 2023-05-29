const numbersSum = (array)=>{
    let result = 0;
    for (let index = 0; index < array.length; index++) {
        if (typeof(array[index])=="number") {
            result +=array[index];
        }
    }
    return result;
}

console.log(numbersSum([2,3,4,5,false,"45"]));
console.log(numbersSum([1,2,"13","4","645"]));
console.log(numbersSum([true,false,"123","75"]));
console.log(numbersSum([1,2,3,4,5,true]));