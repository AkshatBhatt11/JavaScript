const name1 = ["akshat", "vishnu", "mayank"]
const surName2 = ["bhatt", "vekariya", "patel"]

name1.push(surName2)
console.log(name1)

const nameSur = surName2.concat(name1)
console.log(nameSur)

const allName = [...name1, ...surName2]
console.log(allName)

const oth_Arr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_Arr = oth_Arr.flat(Infinity) //it gives all nested array in one single output
console.log(real_Arr)

console.log(Array.isArray("ak")) //it check that input is array or not

console.log(Array.from("vk")) //it convert input into array

console.log(Array.from({name: "mk"})) //it will not convert into array 

let s1 = 11
let s2 = 12
let s3 = 13

console.log(Array.of(s1, s2, s3)) //it convert values into array