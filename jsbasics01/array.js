const myArr = [0,10,2,3,4,5] // declaration of an array
const myHeros = ["shaktiman","naagraj"]

const myArr2 = new Array(2,5,3,6) // another wayof decalaring an array
console.log(myArr[1]);
console.log(myArr2[3]);

//Array Methods
myArr.push(8) //add new elements
console.log(myArr);
myArr.pop() //it always delete last element of an array
console.log(myArr);


//unshift() always add new element at zeroth index
//shift() uses to delete first element of an array

 console.log(myArr.includes(9)); // it tells whether the element is present or not (in boolean value)
 console.log(myArr.indexOf(10)); // it tells about the index of an element

const newArr = myArr.join() // it changes the typeof array to string
 console.log(myArr);
 console.log(newArr);
 console.log(typeof newArr);

//slice splice
console.log("A" , myArr);
const myn1 = myArr.slice(1,3) // it cuts or slice the given range elementbut not the last one 
console.log(myn1);
console.log("B" , myArr);

const myn2 = myArr.splice(1,3)
console.log("c" , myArr); // in splice original array itself gets changed and the new array become of all the elements whichgets spliced out
console.log(myn2);


//Merging of two array
const marvel_Hero=["thor","ironman","superman"]
const dc_Hero=["spiderman","flash","batman"]
//now to merge two array together we use SPREAD OUT METHOD//
const allNewHero=[...marvel_Hero, ...dc_Hero] //this is the syntax of spread out method
console.log(allNewHero);

const another_array=[1,2,3,[4,5,6],7,[6,7,[5,8]]]
const real_another_array=another_array.flat(Infinity) /* so basically flat is a method by which we merge all the sub array into a single array  */
console.log(real_another_array);

console.log(Array.isArray("Haider")); // here we ask whether it is array or not?
console.log(Array.from("Haider")); // here we convert string haider to arrayusing from method
console.log(Array.from({name:"haider"})); //it return an empty object

// from using Array OF method we change different types of value into an array simultaneously
let score1=100
let score2=200
let score3=300
let meraNaam="Haider Ali"
console.log(Array.of(score1,score2,score3,meraNaam));
