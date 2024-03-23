let myDate = new Date() //typeof date is Object in js
//js always give time in milisecond
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());

console.log(Math.floor(Date.now()/1000)); // to calculate exact time in seconds 