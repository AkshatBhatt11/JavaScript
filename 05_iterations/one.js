// For loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        //console.log("5 is best number");
    }
    //console.log(element);
}

for (let i = 1; i <= 10; i++) {
    //console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
        //console.log(`Inner loop value: ${j} and Outer loop value: ${i}`);
        //console.log(`${i} x ${j} = ${i*j}`);
    }
}

let myArray = ["ak", "vk", "mk"]
//console.log(myArray.length);

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    //console.log(element);
    
}

for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        //console.log(`Value of i is ${i}`);
        //console.log(`Detected 5`);
        break //break is use to break the loop
    }
    //console.log(`Value of i is ${i}`);
}

for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log(`Detected 5`);
        continue //continue will run the loop but print the input where condition match
    }
    console.log(`Value of i is ${i}`);
}