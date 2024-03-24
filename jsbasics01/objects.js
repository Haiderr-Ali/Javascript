//+++++++++MOST IMPORTANT TOPIC OF JS++++++++++//

//how to add symbol in object key
const mySym = Symbol("key1")

const jsUser={
    name:"Haider",
    "full name": "haider ali", //we can declare variable name as string, it is possible in js//
    age:18,
    location: "Patna",
    email:"haider@google.com",
    isLoggedIn: false,
    lastLoggedIn:["monday","saturday"],
    [mySym]: "mykey1" // this is the syntax to add symbol to the object.

}
//different methods for getting object's value output//
console.log(jsUser.email);
console.log(jsUser["email"]);//optional method
console.log(jsUser["full name"]); //only method for string value output read the input method carefully if not understood// 
console.log(jsUser[mySym]);

jsUser.email= "haider@microsoft.com" //method to change value in object
//Object.freeze(jsUser) // after using freeze you cannot change any value of the object..
//lets try freeze impact!
jsUser.email ="haider@chatgpt.com"
console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello JS user");
}
jsUser.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`); //refers to other value
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());


// this is also a another method to declare an object
const tinderUser = new Object() //singletonn object
// const tinderUser = {} // non-singletonn 
/* both give same output that is empty object {} */

tinderUser.id = "123ab"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
console.log(tinderUser);

// method to declare object inside an object//
const regularUser ={
    email:"some@gmail.com",
    fullname: {
        userfullname:{
            firstname: "haider",
            lastname: "ali"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname);

//merging objects//
const obj1 = {1: "a" , 2: "b"}
const obj2 = {3: "c" , 4: "d"}
const obj3 = {5: "e" , 6: "f"}

// const obj4 = Object.assign({}, obj1,obj2,obj3)//old method
const obj4 ={...obj1, ...obj2, ...obj3} // new method
console.log(obj4);

//objects with API//
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}
 const {courseInstructor : instructor} = course // this is called destructuring of value in objects..
 console.log(instructor);
const {price} = course
console.log(price);
