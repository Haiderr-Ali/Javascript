// switch (key == wo value to check krta hai) {
//     case value: // value will be strings also
        
//         break;

//     default:
//         break;
// } syntax of switch 

const month =3
switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("february");
        break;
    case 3:
        console.log("March");
        break;    
    case 4: 
        console.log("April");
        break;

    default:
        console.log("default case match");
        break;
        
        
}



// +++++++++++++++++++++++ TRUTHY AND FALSY VALUE ++++++++++++++++++++//

/* FALSY VALUE => false, 0, -0, Bigint 0n, null, undefined, NaN

TRUTHY VALUE => rest all the value another than this is a truthy value : e.g. "0", 'false', " ", [] , {} , function() {}
*/
// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }
const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined // it will not read null and undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20



console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")








