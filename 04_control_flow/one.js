// if statement (= assign, == isQqual, === check datatype)
// <, >, <=, >=, ==, !=, ===, !==


// const isUserLogIn = true
// const temp = 32
// if (temp < 30) {
//     console.log("temp is less than 30");
// } else {
//     console.log("temp is greater than 30");
// }


// const score  = 75
// if (score > 50) {
//     const power = "ak"
//     console.log(`User power: ${power}`)
// }

// console.log(`User power: ${power}`)


// const bal = 1000
// if (bal > 500) console.log("call"),
// console.log("put");

// if (bal < 500) {
//     console.log("less than 500");
// }else if (bal < 600) {
//     console.log("less than 600");
// }else if (bal < 700) {
//     console.log("less than 700");
// }else if (bal < 800) {
//     console.log("less than 800");
// }else if (bal < 900) {
//     console.log("less than 900");
// }else {
//     console.log("less than 1100");
// }


const userLogIn = true
const debCard = true
const logInGoogle = false
const logInEmail = true

if (userLogIn && debCard && 2==3) { //And
    console.log("Access user");
} 

if (logInGoogle || logInEmail) { //Or
    console.log("User log In");
}