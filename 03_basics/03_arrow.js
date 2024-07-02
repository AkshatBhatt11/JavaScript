const user = {
    uName: "akshat",
    age: 21,

    welcomeMess: function () {
        // console.log(`${this.uName}, welcome message`)
        // console.log(this)
    }
}

// user.welcomeMess() 
// user.uName = "vishnu"
// user.welcomeMess()

// console.log(this) 


// function chai() {
//     let user = "ak"
//     console.log(this)
// }
// chai()


// const chai = () => {
//     let user = "ak"
//     console.log(this)
// }
// chai()


// const addTwo = (n1, n2) => { explicite function with use of return keyword
//     return n1 + n2
// }
// console.log(addTwo(5,6))


// const addTwo = (n1, n2) => n1 + n2 implicite function without use of return keyword
// console.log(addTwo(5,7))


const addTwo = (n1, n2) => ({userN: "akshat"})
console.log(addTwo(5,7))

