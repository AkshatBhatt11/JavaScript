// Array declare by three types

const myArr = [1, 3, 5, 7, 9]
const myArr2 = ["ak", "vk", "mk"]
const myArr3 = new Array(2, 4, 6, 8, 10)

console.log(myArr)
console.log(myArr2)
console.log(myArr3)


// Array methods

myArr.push(11) //add element in array
console.log(myArr)

myArr2.pop() //remove last value from array
console.log(myArr2)

myArr3.unshift(1) //it add value at 0 position of array
console.log(myArr3)

myArr.shift() //it remove value from 0 position of array
console.log(myArr)

console.log(myArr.includes(9)) //it check that the given value is avalible or not in array and gives output in true of false

console.log(myArr.indexOf(11)) //it gives the position of the given value in array

const newArr = myArr.join() //it convert the given array into string
console.log(newArr)//it also change the type form array to string after converting


// slice, splice

console.log("ak ", myArr)
const myN1 = myArr.slice(1, 3) //it start from 1 position till 3 - 1(=2) position in array for slice(1, 3)
console.log(myN1)
console.log("vk ", myArr3)

const myN2 = myArr3.splice(1, 3) //it remove value from position 1 to 3 and give output except that value
console.log(myN2)
console.log("mk ", myArr3)