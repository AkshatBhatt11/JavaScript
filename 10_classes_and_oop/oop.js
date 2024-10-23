const user = {
    userName: "Akshat",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user detail from DB");
        //console.log(`Username: ${this.userName}`);
        //console.log(this);
    }

}

//console.log(user.userName);
//console.log(user.getUserDetails());
//console.log(this);


//`Construction Function`
// const promiseOne= new Promise()
// const date = new Date()

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greet = function(){
        console.log(`Welcome ${this.username}`);
        
    }

    return this
}

const userOne = new User("ak", 8, true)
//const userTwo = new User("vk", 10, false)

console.log(userOne.constructor);
//console.log(userTwo);
