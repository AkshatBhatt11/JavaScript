// Object decalre using constructor(singleton)
// Object.create


// Object declare using literals(not singleton)

const mySym = Symbol("sy1")

const JsUser = {
    name: "akshat",
    "surName": "bhatt",
    age: 21,
    location: "rajkot",
    mail: "abc@google.com",
    isLogIn: false,
    lastLogIn: ["Monday", "Friday"],
    [mySym]: "sy2",
}

console.log(JsUser.mail)
console.log(JsUser["name"])
console.log(JsUser.surName) //to get output of key surName
console.log(JsUser["surName"]) //same as above but it can get output with white space in key name
console.log(JsUser[mySym]) //to declare symbol as key and value

JsUser.location = "surat" //values overwrite
// Object.freeze(JsUser) //it freeze the object so it cannot modify further

JsUser.greet = function(){
    console.log("hello world")
}
console.log(JsUser.greet())

JsUser.greet2 = function(){
    console.log(`hello ${this.name}`) //this keyword is used to get name from object
}
console.log(JsUser.greet2())