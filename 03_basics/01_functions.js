
function myName(){
    console.log("a")
    console.log("k")
}

// myName() //to execute function

// function add2Num(number1, number2){ //Parameter inside ()
//     console.log(number1 + number2)
// }

function add2Num(number1, number2){ 
    // let result = number1 + number2
    // return result //function will not execute after return

    return number1 + number2
}

const result = add2Num(2, 4) //function call through Argument inside ()
// console.log(result)

function loginMessage(username = "vishnu"){
    if (!username) {
        console.log("enter user name")
        return
    }
    return `${username} just log in`
}

const name = loginMessage("akshat")
// console.log(name)


function calCart(...num1) { //Rest operator bundle all items and give output
    return num1
}
// console.log(calCart(2, 4, 6, 8, 10, 12))

const user = {
    uName: "ak",
    age: 21
}

function handObj(anyObj) {
    console.log(`hello ${anyObj.uName} is ${anyObj.age} years old.`)
}
// handObj(user)
handObj({ //direct object pass to function
    uName: "vk",
    age: 24
})

const myArr = [2, 4, 6, 8, 10] //array pass to function
function retSecVal(getArr){
    return getArr
}
// console.log(retSecVal(myArr))
console.log(retSecVal([1, 3, 5, 7, 9]))