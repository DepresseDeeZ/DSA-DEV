
console.log("Classes , New keyword and This Keyword")
// //the "new" keyword
// //it createa new object

// const person  = {};  //old methods
// const person2 = new Object(); //"new" keyword method with Object Cosntructor

// person.firstName= 'jonh';
// person2.firstName= 'jonh';


// console.log(person);
// console.log(person2);

// console.log(typeof person);
// console.log(typeof person2);

// //create array using new keyword
// const arr =[1,2,3];
// const arr2 = new Array(1,2,3);

// console.log(arr,arr2)

// //create date using new keyword only then your can create Date
// const mydate = new Date('August 11,2024');
// console.log(mydate)
// console.log(mydate.getFullYear())

// //data types in javascript
// console.log(Array)
// console.log(Object)
// console.log(Number)
// console.log(Date)

// //number using new keyword
// const mynum = new Number(100.23);
// console.log(mynum.toFixed(0))


// const arr = [1,2,3,4,5]; //literal syntax
// arr.push(6);
// console.log(arr);



// //This Keyword
// function Sentence(words){
//     this.words = words;
//     console.log(this)
// }
// const firstString = new Sentence("hello this is sentecnce");

// console.log(this)

// const person = {
//     name:'john',
//     getName(){
//         console.log(this);
//     }
// }

// person.getName();


// function Car(color,brand,wheels){
//     this.color =color;
//     this.brand =brand;
//     this.wheels=wheels;

//     console.log(this);

// }

// const blueCar = new Car('blue','toyota',10);
// const redCar = new Car('red','honda',12);

// //Classes
// const person = {
//     name:'Melissa',
//     age:23,
//     isWorking:true
// };

// // creating a class
// class Person {
//     constructor(name,age,isWorking){ //is a receptor of value that we send usign class
//         this.name =name;
//         this.age =age;
//         this.isWorking =isWorking;

//     }

// }
// const user = new Person('Melisaa',24,true);
// console.log(user);

// //shortest way to define class and access it 
// const createPerson = (name, age,isWorking) =>({ name, age,isWorking});
// const user = createPerson('Melissa',23,true);
// const user1 = createPerson('a',23,true);

// const user2 = createPerson('b',23,true);
// const user3 = createPerson('c',23,true);

// console.log(user);
// console.log(user1);
// console.log(user2);
// console.log(user3);