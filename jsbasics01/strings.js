let name="Haider "  //One way of initializing string

const gameName = new String ('BGMI-India')  //Another Way of initializing string
console.log(gameName)
console.log(gameName[0])
console.log(gameName.__proto__)
console.log(gameName.length)
console.log(gameName.toLowerCase()) // we can access its prototype methods using this . syntax
console.log(gameName.charAt(3))
console.log(gameName.indexOf("I"))

const newString = gameName.substring(0,2)
const anotherString = gameName.slice(-9,6)

console.log(anotherString)
console.log(newString)

const againString = new String('        Haider    ') // here first create new String then store into another and then apply trim function

console.log(againString.trim())  //REMOVE ALL SPACES

const url = "haiderportfolio%20new.com"

console.log(url.replace('%20','-'))

console.log(url.includes('anonymus')) // it identifies whether the element is prsesnt or not//

console.log(gameName.split('-'))

const repoAccount = 14

console.log(name + repoAccount + " Value")  //OUTDATED SYNTAX

console.log(`Hello Guys My name is ${name} hope you all are doing well and my ${repoAccount} is stored in GitHub`)  //Latest Syntax
