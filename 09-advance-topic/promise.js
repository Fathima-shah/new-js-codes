// const promiseOne = new Promise(function(resolve, reject){
//     setTimeout(() => {

//         // do an async task
//         //DB calls, cryptography, network
//         console.log('async task is completed')
//         resolve()
//     }, 1000)
// })

// promiseOne.then(() => {
//     console.log('promise consumed')
// })

new Promise((resolve, reject) => {
setTimeout(() => {
    console.log('async task2')
    resolve()
}, 1000);
}).then(() => {
    console.log('task 2 completed')
})

const promiseThree = new Promise((resolve, reject) => {
resolve({username: 'shana', age: 24})
})

    promiseThree.then((user) => {
    console.log(user)
    })



// const promisefour = new Promise((resolve, reject) => {
// resolve({username: 'shana', age: 24})
// })
//     promisefour.then((user) => {
//     console.log(user)
//     return user.username
//     })
//     .then((data) => {
//     console.log(data)
//     })

    const promiseFive = new Promise((resolve, reject) => {

        setTimeout(() => {

            let error = false;
            if(!error){
                resolve({username: "hitesh", password: "123"})
            }else{
                reject('error')
            }
        }, 1000)
    })

    promiseFive.then((user) => {
        console.log(user)
        return user.username
    }).then((username) => {
        console.log(username)
    }).catch((error) => {
        console.log(error)
    }).finally(() => console.log("the promise is either resolved or rejected"))

    const promiseSix = new Promise(function(resolve, reject) {
        setTimeout(function(){
            let error = false
            if (!error) {
                resolve({username: "javascript", password: "123"})
            } else {
                reject('ERROR: JS went wrong')
            }
        }, 1000)

    })

    async function consumePromiseSix() {
        try { 
            const response = await promiseSix
            console.log(response);
            
        } catch (error) {
            console.log(error)
            
        }
    }

    consumePromiseSix()

    async function getAllUsers(){
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const data = await response.json()
            console.log(data)
            
        } catch (error) {
            console.log(error)
            
        }}

        getAllUsers()

        fetch('https://api.github.com/users/hiteshchoudhary').then((response) => {
            response.json()
        }).then((data) => {
            console.log(data)
        })

        //promise.all // to study in detail
    