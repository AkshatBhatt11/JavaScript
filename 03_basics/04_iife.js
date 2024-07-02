// Immediately Invoked Function Expressions (IIFE)

(function chai() { // named iife
    console.log(`DB CONNECTED ONE`)
})(); // to run two iife at same time use ; after first iife code


(() => { // unNamed iife
    console.log(`DB CONNECTED TWO`)
})();

((name) => { // parameter pass to iife
    console.log(`DB CONNECTED TWO ${name}`)
})('Akshat')