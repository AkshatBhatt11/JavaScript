let myDate = new Date()
console.log(myDate)// output current date = "2024-06-19T10:37:23.599Z"

console.log(myDate.toString())// output day month in string and date year time with GMT+0000 = "Wed Jun 19 2024 10:37:23 GMT+0000 (Coordinated Universal Time)"

console.log(myDate.toDateString())// output day month in string and date year = "Wed Jun 19 2024"

console.log(myDate.toISOString())// output date and time in munber = "2024-06-19T10:37:23.599Z"

console.log(myDate.toJSON())// output date and time in munber = "2024-06-19T10:37:23.599Z"

console.log(myDate.toLocaleDateString())// output date in number = "6/19/2024"

console.log(myDate.toLocaleString())// output date and time in number = "6/19/2024, 10:37:23 AM"

console.log(myDate.toLocaleTimeString())// output time in number = "10:37:23 am"

let myCreteDate1 = new Date(2023, 1, 0)// input year month(0-11) date(1-month date)
console.log(myCreteDate1.toLocaleString())
let myCreteDate2 = new Date(2023, 1, 0, 24, 11)// input year month(0-11) date(1-month date) hour(0 AM - 23 PM) minutes(0-59)
console.log(myCreteDate2.toLocaleString())
let myCreteDate3 = new Date("2023-01-15")
console.log(myCreteDate3.toLocaleString())
let myCreteDate4 = new Date("11-01-2003")// date in india format
console.log(myCreteDate4.toLocaleString())

let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(myCreteDate4.getTime())
console.log(Math.floor(Date.now()/1000))// mill sec to second and remove decimal value

let newDate = new Date()
console.log(newDate.getMonth() + 1)// output last month + 1 to get current month
//`${newDate.getDay()} and the time`

newDate.toLocaleString('default', {
    weekday: "long"
})