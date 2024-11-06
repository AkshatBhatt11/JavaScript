class User{
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    get email(){
        return `${this._email.toUpperCase()}@vk`.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}ak`
    }
    set password(value){
        this._password = value
    }
}
const ak = new User("ak@gmail.com", "xyz")
console.log(ak.email);
console.log(ak.password);
