// For loop
// ["", "", ""]
// [{}, {}, {}] 

const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    //console.log(num);
}

const greeting = "ak"
for (const greet of greeting) {
    //console.log(`Hello ${greet}`);
}

// Maps - object that hold keys-values

const map = new Map() //map is not iteration so no loop formed
map.set('IN', 'India')
map.set('USA', 'United State of America')
map.set('FR', 'France')
// console.log(map);

for (const [key, value] of map) {
    //console.log(key, '-', value);
}

const myObj = {
    'game1': 'NFS',
    'game2': 'Superman'
}

for (const key of myObj) {
    console.log(key);
}