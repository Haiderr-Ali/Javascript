// map method

const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})


// CHAINING METHOD 
const newNums = myNumers
                .map((num) => num * 10 ) // FIRSTLY ALL ARRAY ELEMENT WILL MULTIPLY BY 10
                .map( (num) => num + 1) // THEN ALL ELEMENT GET ADDED BY 1
                .filter( (num) => num >= 40) // FILTER OUT ALL THOSE ELEMENTS WHICH ARE GREATER THAN 40

console.log(newNums);