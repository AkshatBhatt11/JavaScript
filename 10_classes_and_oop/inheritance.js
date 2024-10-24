class User {
    constructor(username) {
        this.username = username
    }
    logMe(){
        console.log(`USERNAME is ${this.username.toUpperCase()}`);
    }
}

class Teacher extends User{
    constructor(username, email, password) {
        super(username)
        this.email = email;
        this.password = password
    }
    addCourse(){
        console.log(`New course added by ${this.username}`);
    }
}

const ak = new Teacher("akshat", "xyz@email.com", "123")
//console.log(ak);
ak.logMe()

const vk = new User("mayank")
vk.logMe()

console.log(ak instanceof User);
