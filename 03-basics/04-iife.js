//Immediately invoked function Expressions (IIFE)

(function chai(){
    //named iife
    console.log('db connected');
})();

((name) => {
    console.log(`db connected to ${name}`)// unnamed iife
})('shana')
