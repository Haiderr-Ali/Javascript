// suppose there is function named sayMyName...
//then if we write just sayMyName when calling then it shows its reference
//and if we write sayMyName().. then show its execution...
function addTwoNumber(number1,number2){ // function parameters
    //  let result = number1+ number2
    //return result
    return number1+number2
}
const result = addTwoNumber(3,5) // function argument
console.log("result:", result);

//another way of declaring arguments//
function loginUserMessage(username){
    return `${username} just logged in`
}
console.log(loginUserMessage("haider"))   // argument passed to parameters//

/*++++++++REST OPERATORS IN FUNCTION++++++*/
function calculateCartPrice(...num1) {
    return num1
}
console.log(calculateCartPrice(200,400,500)) //here in this method using rest operator we passed many arguments to just one parameter


// object passing in function
const user = {
    username:"haider",
    price:199
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user)

//array in funstion//
const myNewArray = [200,400,100,600]
function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100,200,150])); // another method in this we dont have to store in other variable