/* Stack memory=> in stack memory copy of the value is sent not the reference(location) of the value thatswhy if we change the
 value, the original value doesnot change  */
 
let names = "Haider"
let anotherName = names
anotherName = "HaiderAli"
console.log(names);
console.log(anotherName);

/* in heap memory, reference (location) of the original value pass and thatswhy if we change the value, so both the value gets changed original one and new one both */

let userOne = {
    email: "xyz@google.com",
    upi: "abc@"
}
let userTwo=userOne;
userTwo.email = "abc@yahoo.com"
console.log(userOne.email);
console.log(userTwo.email);

