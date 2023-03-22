const speak = function(name){
    console.log(`good day ${name}`);
};

speak("Leonid");

// short arrow function
// calcArea = function(radius) {
//    return
//}

const calcArea = radius => 3.14 * radius**2;
console.log(calcArea(5));

const greet = () => "hello, world";

console.log(greet());

const bill = (products, tax) => {
    let total = 0;
    for(let i = 0; i < products.length; i++){
        total += products[i] + products[i] * tax;
    }
    return total;
}

console.log(bill([10,15,30], 0.2));

// function vs methods
 // callback function
 const myFunc = (callbackFunc) => {
    let value = 50;
    callbackFunc(value);
 }

 myFunc(value => {
    console.log(value);
 });