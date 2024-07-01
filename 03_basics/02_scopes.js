// var = 15 //Never use VAR 
let c = 14 //global scope
if (true) { //value inside curly bracket is block scope
    let a = 11
    const b = 12
    // var c = 13
    // console.log(a)//print value of block scope
}

// console.log(c) //print value of global scope


function one() {
    const userName = "akshat"
    
    function two() {
        const website = "youtube"
        console.log(userName);
    }

    // console.log(website);
    two()
}

// one()

if (true) {
    const uName = "akshat"
    if (uName === "akshat") {
        const website = " snap"
        // console.log(uName + website);
    }
    // console.log(website);
}
// console.log(uName);


console.log(addOne(11)) //access function before declare output = 12
function addOne(num) {
    return num + 1
}


addTwo(15) //access function before declare output = cannot access berfore initialization
const addTwo = function (num) {
    return num + 2
}
