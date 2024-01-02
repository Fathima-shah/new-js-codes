let a = 30
//var c = 30
if (true) {
    let a = 100
    const b = 200
    var c = 300
}

console.log(a)
//console.log(b)
//console.log(c)

function one(){
    const username = "shana"

    function two(){
        const website = "instagram"
        console.log(`${username} active on ${website}`)
    }

    two()
    //console.log(website) // only child functiopn can access to the parent funtion not vice versa
}
// one()


if(true) {
    const username = "shana"
    if(username === "shana"){
        const website = " insta"
        //console.log(username + website)
    }
    //console.log(website) // cannot be accessd
}
//console.log(username)//cannot be accessed

//+++++++++++++++++++interesting++++++++++++++++++++++++

console.log(addone(4))
function addone(num){
    return num + 1
}

//in the next function u cannot execute the funtion before initialization of the function


console.log(addtwo(4))
const addtwo = function(num){
    return num + 1
}