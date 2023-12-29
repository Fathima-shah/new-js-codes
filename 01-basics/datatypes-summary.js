//stack and heap memory
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//stack (primitive)  heap(non-primitive)

let myName = "shana";
let anotherName = myName;
anotherName = "mari";

console.table([myName, anotherName]); //stack

let myDetails = {
    email: "fathi@gmail.com",
    upi: "fathiybl"
};

let anotherDetail = myDetails;

anotherDetail.email = "shana@gmail.com";

console.log(myDetails);
console.log(anotherDetail); // this one will go in heap

