//functions basics

// function addTwoNumbers(number1, number2){
//     console.log(number1+number2);
// }

// addTwoNumbers(2, 50)

function addTwoNumbers(number1, number2){
    //let result = number1+number2;
    //return result

    return number1 + number2;
}
result = addTwoNumbers(2, 3)
//console.log(result)

// function loginUserMessage(username = "sam"){
//     if(!username){
//         console.log("please enter username")
//     }
//     return `${username} just logged in`;
    
// }

// console.log(loginUserMessage());

// function calculateCartPrice(...num1){
//     return num1;
// }

// console.log(calculateCartPrice([200, 300, 5000, 700]))

function calculateCartPrice(val1, val2, ...num1){
    return num1;
}

//console.log(calculateCartPrice(200, 300, 5000, 700))

const user = {
    username: "hitesh",
    prices: 100
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username}`)
}

//handleObject(user)

handleObject({
    username: "shana"
})

const myNewArray = [100, 200, 300]
 
function returnSecondvalue(getArray){
    return getArray[1]
}

console.log(returnSecondvalue(myNewArray))