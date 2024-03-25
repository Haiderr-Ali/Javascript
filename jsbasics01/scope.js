if(true){
    let a = 2;
    const b = 5;
    var c = 4;
    /* now,suppose if we want to console.log let and var
    we cannot get the outtput and it gives us error, because let and const have block level property
    ,,, but var will getsprinted because var hasglobal scope property that is why in moderns js it is not recommended */
}
// console.log(a);// not possible
// console.log(b);// not possible
console.log(c);// it is possible

/*+++++++ scopes in nested function +++++++ */

/* ALWAYS REMEMBER THIS
child function can call parent function values, but parent function can't call its child function */


function one() {
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username); // child function can call parent function values, but parent function can't
    }
    two()
}
one()

/*+++++++ scopes in nested if statement +++++++ */

if(true) {
    const username ="hitesh"
    if(username==="hitesh"){
        const website =" youtube"
        console.log(username + website); //this console can definitely give output
    }
    // console.log(website); // this console can't give output because of above rule

}
// console.log(username); // this console can't give output because of above rule


/* DIFFERENT METHODS OF DECLARING FUNCTION */
/* 1. in this method of DECLARING FUNCTION , if we call the function before declaring it will not give error  */
console.log(addone(5));
function addone(num) {
    return num+1
}

/* 2. in this method of DECLARING FUNCTION , if we call the function before declaring it will give error because function declare in a variable 
hoisting concept */

console.log(addtwo);
const addtwo = function(num){
    return num+2
}