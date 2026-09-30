// for declaring variables always use const or let 
// const for constants and let for variables that can be changed 
const Name = "hrishi";
let money = 1200000
console.log(Name)
console.table([Name,money])
// primitive datatypes mmemory are stored in stack and when we assign value of one variavle to another only a copy is assigned to other 
// non premitive datatypes are stored in heap so it gives the original reference for the another variable 
let acc=money 
acc= 20 
console.log(money)// we can see money hasent change 

let hrishi ={
    firstname : "hrishi",
    salary: 2000000
}
let sewak = hrishi
sewak.salary = 2
console.log(hrishi.salary)// we can see hrishi.salary has also changed 

// f in python we see here we use ` we write betwwen these backquote and any variable we need to insert is written ${within this bracket }`
 