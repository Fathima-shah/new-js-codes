const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {

        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()

// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function name(){
//     let username = "shana"
//     console.log(this.username);
// }

//name();

// const chai = function () {
//     let username = "shana"
//     console.log(this.username)
// }

// const chai = () => {
//     let username = "shaha"
//     console.log(this)
// }

// chai()

//const addTwo = (num1, num2) => (num1 + num2)
const addTwo = (num1, num2) => ({username: "shana"})

console.log(addTwo(2, 3))

