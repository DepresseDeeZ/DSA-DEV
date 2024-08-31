console.log("ECMAScript 6 or simply ES6");

//const and let are introudce in ES6
// var age =27;
// console.log(age);
// var age =28;
// console.log(age)

// let age =27;
// console.log(age);
// let age =28;
// console.log(age)


// const password = 12123;
// password = 213432;
// console.log(password)


// // Arrow Function

// const multiply =(x)=> x*x;
// console.log(multiply(2))

// //default paramter
// const add = (a,b,c)=>{
//     return a+b+c;
// }

// console.log(add(2,2))


//Template String

const customer ='Umang';

const order = {
    name: 'ipad',
    price:1200
}
const msg = `Hello, ${customer} do you wanT to buy an order for ${order.name} for ${order.price} bucks`;
console.log(msg)