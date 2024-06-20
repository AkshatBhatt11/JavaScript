const ak = new Object() //singleton object
const vk = {} //non-singleton object

    vk.id = "123abc"
    vk.name = "akshat"
    vk.age = 21
    vk.isLogIn = true

console.log(vk)

const mb = {
    mail: "abc@gmail.com",
    name : {
        firstName: "mayank",
        lastName: "patel"
    }
}
console.log(mb.name.firstName)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
// const obj3 = {obj1, obj2}
// const obj3 = Object.assign(obj1, obj2)
const obj4 = Object.assign({}, obj1, obj2) //{} - target and obj1 - source
const obj3 = {...obj1, ...obj2} //to combine two object 
console.log(obj3)

//array of object
const user = [ 
    {
        id: 1,
        mail: "abc@gmail.com"
    },
    {
        id: 2,
        mail: "sbc@gmail.com"
    },
    {
        id: 3,
        mail: "dbc@gmail.com"
    },
]

user[0].mail
console.log(vk) //to get output of keys and values

console.log(Object.keys(vk)) //to get output of keys in array format
console.log(Object.values(vk)) //to get output of values in array format
console.log(Object.entries(vk)) //to get output of keys and values in array format

console.log(vk.hasOwnProperty('id')) //it check that keys name id is avalible or not and output in true and false