const myNum = [1, 2, 3]

// const myTotal = myNum.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNum.reduce( (acc, curval) => acc + curval, 2)
//console.log(myTotal);

const shopCart = [
    {
        itemName: "js course",
        price: 11
    },
    {
        itemName: "java course",
        price: 12
    },
    {
        itemName: "python course",
        price: 13
    },
    {
        itemName: "c++ course",
        price: 14
    },
    {
        itemName: "ruby course",
        price: 15
    },
]
const Tprice = shopCart.reduce( (acc, item) => acc + item.price, 0)
console.log(Tprice);