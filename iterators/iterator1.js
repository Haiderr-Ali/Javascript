// for loop
for (let index = 0; index <= 10; index++) {
     const element = index;
     console.log(element);
 }

 for (let i = 1; i <= 10; i++) {
     console.log(`Outer loop value: ${i}`);
     for (let j = 1; j <= 10; j++) {
         console.log(i + '*' + j + '=' + i*j);
        
     }
    
 }

//for loop on Array but this not a modern way

 let myArray = ["flash","batman","superman"]
 for (let index = 0; index < myArray.length; index++) {
     const element = myArray[index];
     console.log(element);
 }


// BREAK AND CONTINUE 
 for (let index = 1; index <= 20; index++) {
     if  (index==5){
         console.log(`detected 5`);
         break; // it will stop the execution after that
     }
     console.log(`value of i is ${index}`);
    
 }
 for (let index = 1; index <= 20; index++) {
     if  (index==5){
         console.log(`detected 5`);
         continue // it will skip the execution at that iteration
     }
     console.log(`value of i is ${index}`);
    
 }

//WHILE LOOP//

 let index = 1
 while (index<=10) {
     console.log(`value of index is ${index}`);
     index ++
 }

 //while loop on Array

 let myArray = ["flash","batman","superman"]
 let arr =0
 while (arr<myArray.length) {
     console.log(`Value is ${myArray[arr]}`);
     arr = arr + 1
 }

 do while loop
 let score =1

 do {
     console.log(`score is ${score}`);
     score+=2
 } while (score<=10);
