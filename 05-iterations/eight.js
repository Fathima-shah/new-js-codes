// reduce

const myNums = [1, 2, 3]

// const total = myNums.reduce((acc, val) => {
// return acc+val
// },0)
// const total = myNums.reduce((acc, val) => acc+val, 0)

// console.log(total)

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay)