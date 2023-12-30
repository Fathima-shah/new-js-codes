//array

const myArr = [0, 1, 2, 3, 4, 5]

//myArr.push(5);

//myArr.unshift(2)
//myArr.shift()


console.log(myArr)

const myn1 = myArr.slice(1, 4);// slice means it does not include the range
console.log(myn1)

const myn2 = myArr.splice(1, 2); //it includs the range and manipulate the originbal one
console.log(myn2);