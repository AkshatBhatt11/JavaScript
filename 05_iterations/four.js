const myObj = {
    js: 'Javascript',
    cpp: 'C++',
    rb: 'Ruby',
    swift: 'Swift by Apple'
}

for (const key in myObj) {
    //console.log(`${key} is shortcut for ${myObj[key]}`);
}

const pro = ["js", "cpp", "rb", "swift"]
for (const key in pro) {
    //console.log(`${pro[key]} is rated by ${key}`);
}

const map = new Map()
map.set('IN', 'India')
map.set('USA', 'United State of America')
map.set('FR', 'France')
map.set('EN', 'England')

for (const key in map) {
    console.log(key);
}