class User {
    constructor(username) {
        this.username = username
    }
    logMe(){
        console.log(`Username: ${this.username}`);   
    }
    static createId(){
        return `123`
    }
}

const ak = new User("akshat")
//console.log(ak.createId());

class Teacher extends User {
    constructor(username, email) {
        super(username)
        this.email = email
    }
}

const vk = new Teacher("mayank", "abc@gmail.com")
// vk.createId()
//console.log(vk);
console.log(vk.createId());
