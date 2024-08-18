//Functions

console.log("Fucntions");

// // A block of Code to perform  specific task

// //A fucntion declaration (defining  a function)

// function square(number){
//     console.log("Sqaure of a number")
//     return number*number;
// }

// //A Function Call(calling / exceuting a  function)   
// const a = square(3);
// console.log(a)


// //Declaring and invoking Fucntions

// //a function declartion
// function name1(params){
//     //statement
//     //advatage --=> the have access to "this" keyword
// }

// //a fucntion exzpression
// const names = function(params){
//     //statement
// }

// //Arrow Fucntions
// const name = (paramas)=>{
//     //statement
// }

// //example

// // fucniton is only executed when it is called.
// function sayname(name){
//     console.log(`Hi , ${name}`);

// }

// sayname('umang');



// //Function Return
// //functiosn always return undefined by default

// function add(a,b){
//     return a+b;
// }

// const sum = add(4,10);
// console.log(sum);//14
// _______________________________________________________________________


// function add(a,b){
//     return "Returned" // only first return will be execcuted other return like below will be ignore
//     return a+b;
// }

// const sum = add(4,10);
// console.log(sum);


// //Arrow functions
// // arrow fucntion doesn't have "this" keyword
// const square = (number) => {
//     return number * number; 
// }
// const result = square(5);
// console.log(result);

// //you can use them in as a inline fucntion too
// // example

// const sqaure = (number) => number *number;
// const result = sqaure(5);
// console.log(result);


// //Parameters vs Arguments

// //Parameters- used when defining functions 
// //Arguments - passed when making fucntion call
// const sayhi = (name,age = 20)=>{
//     console.log(`hi ${name} is ${age} years old`);
// }
// sayhi("umang");

// // when to use default value during the mathematical functions

// const add=(a=0,b=0)=>{
//     return a  +  b;
// }

// const res = add(2);
// console.log(res);

