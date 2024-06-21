
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
console.log(name)