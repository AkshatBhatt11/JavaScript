const promisesOne = new Promise(function(resolve, reject){
    //Do an async task
    //DB calls, cryptography, network
    setTimeout(function(){
        //console.log('Async task is complete');
        resolve()
    }, 1000)
}) 

promisesOne.then(function(){
    //console.log("Promise comsumed");
})


new Promise(function(resolve, reject){
    setTimeout(function(){
        //console.log("Async task 2");
        resolve()
    }, 1000)
}).then(function(){
    //console.log("Async 2 resolved");
})


const promisesThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({userName: "Akshat", email: "akakak@example.com"})
    }, 1000)
})

promisesThree.then(function(user){
    //console.log(user);
})


const promisesFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({userName: "Akshat", password: "1234"})
        } else {
            //reject('ERROR: Something went wrong')
        }
    }, 1000)
})

promisesFour
.then(function(user){
    console.log(user);
    return user.userName
})
.then(function(userName){
    console.log(userName);
})
.catch(function(error){
    console.log(error);
})
.finally(function(){
    //console.log("The Promise is either resolved or rejected");
})


const promisesFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({subject: "Javascript", password: "1234"})
        } else {
            //reject('ERROR: JS went wrong')
        }
    }, 1000)
})

async function consumePromisesFive(){
    try {
        const response = await promisesFive
    console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromisesFive()


// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data); 
//     } catch (error) {
//         console.log("E : ", error);
//     }  
// }

//getAllUsers()

fetch('https://randomuser.me/api/')
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data);
})
.catch(function(error){
    console.log(error);
})