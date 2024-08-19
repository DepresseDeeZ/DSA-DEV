console.log("Tricky Parts");
// //Scope
// //Global Scope
// const name = "umang";

// const logname= ()=>{
//     console.log(name);
// }

// logname();

// //this improve the resuablity of the code
// // In JavaScript, scope refers to the accessibility or visibility of variables and functions in different parts of the code. It determines where you can access or reference a particular variable or function.

// // Types of Scope in JavaScript:
// // Global Scope:

// // Variables or functions declared outside any function or block are in the global scope.
// // They are accessible from anywhere in the code, including inside functions.
// // In a browser, global variables become properties of the window object.

// var globalVar = "I am global";

// function accessGlobal() {
//     console.log(globalVar); // I am global
// }
// // Local Scope:

// // Variables or functions declared inside a function are in the local scope of that function.
// // They can only be accessed within that function.
// // Each function has its own local scope.

// function localScope() {
//     var localVar = "I am local";
//     console.log(localVar); // I am local
// }

// console.log(localVar); // Error: localVar is not defined
// // Block Scope (ES6 and later):

// // Variables declared with let or const inside a block ({}) have block scope.
// // They are only accessible within that block.
// // This includes blocks like if, for, and while.

// if (true) {
//     let blockScoped = "I am block-scoped";
//     console.log(blockScoped); // I am block-scoped
// }

// console.log(blockScoped); // Error: blockScoped is not defined
// // Function Scope:

// // Variables declared with var inside a function are function-scoped.
// // This means they are accessible anywhere within the function but not outside of it.

// function funcScope() {
//     var functionScoped = "I am function-scoped";
//     console.log(functionScoped); // I am function-scoped
// }

// console.log(functionScoped); // Error: functionScoped is not defined
// // Lexical Scope:

// // JavaScript uses lexical (or static) scoping, meaning the scope of a variable is determined by its location within the source code.
// // Functions are executed using the scope chain that was in place when they were defined, not the scope in place when they are invoked.

// function outerFunction() {
//     var outerVar = "I am outside";

//     function innerFunction() {
//         console.log(outerVar); // I am outside
//     }

//     innerFunction();
// }

// outerFunction();
// // Scope Chain:
// // When you try to access a variable, JavaScript starts looking for that variable in the current scope. If it doesn't find it, it looks at the next outer scope, and so on, until it reaches the global scope. This is called the scope chain.

// // Understanding scope is crucial for writing clean, bug-free code, as it helps prevent issues like variable collisions and unintended side effects.

// //Local scope / Function scope
// const Fname = ()=>{
//     const n ="umang";
// }
// console.log(n);

//but in local scope you can access the upper variable from the inside but can't dso vise versa

// const someF =()=>{
//     console.log(n);
//     const somR = () =>{
//         const n = "uamng";
//         console.log(n);
//     }
//     somR();
// }
// someF()


// //block Scope
// if(true){
//     const name = "umang";
// }
// console.log(name);


// //block Scope but var doesn't follow the scope and let you acces outside the funciton
// if(true){
//     var name = "umang";
// }
// console.log(name);



// //Hoisting

// console.log(age) // errror

// var age = 20; // udefined
// console.log(age) // 20

// console.log(age)
// var age = 20; // udefined -> this is called hoisting

// function  hoist(){
//     var message;
//     console.log(message);
//     message='test';
// }
// hoist();

// function  hoist(){
//     const message;
//     console.log(message);
//     message='test';
// }
// hoist(); //error


// //closures
// //when you exita fucntion all of it variable disaapear
// //when two fucntion is called inner fucntion call the outer variable
// // inner fucntion are also know as closure that keep alive the outer fucntion variable to use them 

// const outer = ()=>{
//     const outerVar = 'hello';

//     const inner = () =>{
//         const innerVar = 'Hi!';
//         console.log(outerVar,innerVar)
//     }
//     return inner;
// }
// outer(); //no output



// const outer = ()=>{
//     const outerVar = 'hello';

//     const inner = () =>{
//         const innerVar = 'Hi!';
//         console.log(outerVar,innerVar)
//     }
//     return inner;
// }
// const inwe = outer();
// inwe();

