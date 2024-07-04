const code = ["js", "ruby", "java", "python", "c++"]

// code.forEach( function(val) {
//     console.log(val);
// })


// code.forEach( (item) => {
//     console.log(item);
// })


// function prt(item) {
//     console.log(item);
// }
// code.forEach(prt)


// code.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// })


const myCode = [
    {
        langName: "Java",
        langType: "java"
    },
    {
        langName: "Javascript",
        langType: "js"
    },
    {
        langName: "Python",
        langType: "py"
    }
]

myCode.forEach( (item) => {
    console.log(item.langName);
})