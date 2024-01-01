//singleton

//object literals

const mysym = Symbol("key1")//to declare the symbol its the best practice to use the square brackets


const jsUser = {
    name: "shana",
    age: 24,
    [mysym]: "mykey1",
    "full name": "fathishana",
    location: "kerala",
    email: "fathi@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "saturday"]
};

console.log(jsUser.email)
console.log(jsUser["email"]);
console.log(jsUser["full name"])
console.log(jsUser)

jsUser.email = "fathishana@gmail.com"
//console.log(jsUser);
//Object.freeze(jsUser);
//jsUser.name = "mari";
console.log(jsUser);


jsUser.greeting = function() {
    console.log(`hello user, ${this.name}`)
}

console.log(jsUser.greeting());


