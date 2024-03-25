/* THIS Keyword */
const user = {
    username : "haider",
    price: 999,

    // let create function
    welcomemessage: function(){
        console.log(`${this.username} , welcome to website`); /*here
        THIS keyword refers to this function */
        console.log(this); //if we console this line it will print whole function
    }

}

user.welcomemessage() // function called, this function call prints haider , welcome to website due to above THIS reference
user.username = "ali" // now we change the name to ali from haider
user.welcomemessage() // now this functon will prints ali , welcome to website because we change the username ofthe reference//

//console.log(this); // this keyword fot global scope is {}.. empty object



//++++++++++ this keyword will give undefined output in every function+++++++//
       // give UNDEFINED
//  function chai() {
//      let username = "haider"
//      console.log(this.username);
//  }
//  chai()

// const chai= () => {   // this is the method to declare arrow function//
//    let username = "haider"
//    console.log(this);
// }
// chai()

// so THIS keyword always give undefined message both in normal and arrow function declarartion //

/* +++++++++ ARROW FUNCTION ++++++++++ */
// method one of declaring an arrow function, if we use {} we have to write return statement
const addTwo = (num1 , num2) => {
    return num1 + num2
}
console.log(addTwo(3,4));

// method two of declaring an arrow function, in this statement return statement is not required
const addThree = (num1,num2) => (num1+num2)
console.log(addThree(5,4));