// const userEmail = ""

// if(userEmail){
//     console.log("got email")

// } else {
//     console.log("didnt get my email")
// }

 const userEmail = []

// if(userEmail){
//     console.log("got email")

// } else {
//     console.log("didnt get my email")
// }

//falsy values

//false, 0, -0, BigInt 0n, "", null, undefined, Nan

//truthy values

//"0", "false", " ", [], {}, function(){}

if (userEmail.length === 0){
 //   console.log("array is empty")
} 

const emptyObj = {}
 if(Object.keys(emptyObj).length === 0){
    console.log("object is empty")
 }

 //Nullish Coalescing operator (??): null undefined

 let val1;
  //val1 = 5 ?? 10
  val1 = null ?? 10
 // val1 = 5 ?? 10


  //console.log(val1)

  //terniary Operator

  //condition ? true : false

  const iceTeaPrice = 100

  iceTeaPrice>=100 ? console.log("price is correct") : console.log("price is wrong")