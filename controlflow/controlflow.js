// if
// if (condition) {
//     // if condition is true then only this code will gets executed//
//     // if false then it will not executed//
// }
// // if else
// if (condition) {
//     //if this conondition istrue all code of this block will executed
// }
// else{
//     // else this condition will gets executed //
// }

//nested if 
// const balance = 1000
// if (balance < 500) {
//     console.log("less than 500");
// } else if(balance<750){
//     console.log("less than 750");
// }
// else {
//     console.log("less than 1200");
// }

// const userLoggedIn = true
// const debitCard = true
// if (userLoggedIn && debitCard ) { // both condition has to be true
//    console.log("Allow to buy course");
// }

const loggedInFromGoogle = false
const loggedInFromEmail = true
if (loggedInFromGoogle || loggedInFromEmail ) { //one condition has to be true
   console.log("Allow to Login");
}