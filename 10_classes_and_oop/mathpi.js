const descripter = Object.getOwnPropertyDescriptor(Math, 'PI')
//console.log(descripter);


// console.log(Math.PI);
// Math.PI = 4
// console.log(Math.PI);

const ak = {
    name: 'akshat',
    price: 250,
    isAvailable: true,
    orderAk: function(){
        console.log("ak is akshat");
    }
}
console.log(Object.getOwnPropertyDescriptor(ak, 'name'));

Object.defineProperty(ak, 'name', {
    //writable: false,
    enumerable: true,
    //configurable: true
})

console.log(Object.getOwnPropertyDescriptor(ak, 'name'));

for (let [key, value] of Object.entries(ak)){
    if (typeof value !== 'function') { 
        console.log(`${key} : ${value}`);
    } 
}