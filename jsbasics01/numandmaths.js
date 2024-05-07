const score =400 
const balance = new Number(100) //explicitely convert into number,,, also by using new we key word we get the acces to prototype in console
console.log(balance);

console.log(balance.toString().length); // first it converts to strings and then it shows the length of string
console.log(balance.toFixed(2)); //it basically add two value(zeroes) after the decimal

const otherNumber = 23.867
console.log(otherNumber.toPrecision(3)); // it round of the value but carefully itsees value before decimal it returns 23.9
const otherNumberOne = 123.867
console.log(otherNumberOne.toPrecision(3)); // it returns 124

const hundreds = 1000000
console.log(hundreds.toLocaleString()); // it separate value by comma

// +++++++++++++++++++Maths++++++++++++++++++++//
console.log(Math.abs(-4)); //change negative to positive
console.log(Math.round(4.6)); // it is usedto roundoff
console.log(Math.ceil(4.2)); // it gives roundoff value but the upper one always
console.log(Math.floor(4.9)); // it gives roundoff value but the lower one always
console.log(Math.sqrt(25)); // it gives its square root

//math.Random
console.log(Math.random());
console.log(Math.random()*10 +1); 
console.log(Math.floor(Math.random()*10) +1); // it avoids the zero case

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max-min +1)) + min); // it give values within the range of max and min value
