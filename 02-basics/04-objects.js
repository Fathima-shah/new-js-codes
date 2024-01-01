//const tinderUser = new Object() // seme as calling empty object

const tinderUser = {}
 tinderUser.id = "123abc"
 tinderUser.name = "sammy"
 tinderUser.isLoggedIn = false

 //console.log(tinderUser)

 const regularUser = {
    email: "f@gmail.com",
    fullname: {
        userfullname: {
            firstname: "shana",
            lastname: "fathi"
        }

    }
 }

// console.log(regularUser.fullname.userfullname.lastname)

const obj1 = {
    1: "a",
    2: "b"
}

const obj2 = {
    3: "a",
    4: "b"
}

const obj3 = {
    5: "a",
    6: "b"
}

//const obj4 = Object.assign({}, obj1, obj2, obj3)

const obj4 = {...obj1, ...obj2, ...obj3}
//console.log(obj4)

// console.log(tinderUser)
// console.log(Object.keys(obj1))
// console.log(Object.values(tinderUser))

//console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js",
    price: "999",
    courseInstructor: "hitesh"

}

const {courseInstructor: instructor} = course
//console.log(courseInstructor)
console.log(instructor)


//api

{
    "name": "shana",
    "id": "123sd"  // or can be enclosed in array also
}

[
    {},
    {},
    {}
]