// let myName = "Akshat   "
// let mySurname = "Bhatt   "

// console.log(myName.truelength);


let myFriend = ["Mayank", "Akshat", "Vishnu"]

let myNewFriend = {
    Mayank: "Patel",
    Akshat: "Bhatt",

    getAkshatFriend: function(){
        console.log(`Akshat new friend is ${this.Akshat}`);
    }
}

Object.prototype.Valay = function(){
    console.log(`Valay is new friend`);
    
}

Array.prototype.heyFriend = function(){
    console.log(`Valay is old friend`);
}

//myNewFriend.Valay()

// myFriend.Valay()
// myFriend.heyFriend()
//myNewFriend.heyFriend()


//`Inheritance`

const User = {
    name: "Akshat",
    email: "xyz@gmail.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__:TeachingSupport
}

Teacher.__proto__ = User

// New Syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let otherUserName = "Tushar   "
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);    
}

otherUserName.trueLength()
"akshat".trueLength()
"vk".trueLength()