const User = {
    _email: 'mk@gmail',
    _password: 'qwerty',

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    }
}
const mk = Object.create(User)
console.log(mk.email);
