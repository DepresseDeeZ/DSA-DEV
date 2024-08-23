console.log("Value vs Reference");
// // Primitive Data Types (Number, String, Boolean, Null, Undefined, Symbol)
// // Primitive data types are stored in the memory
// // Primitive data types are immutable
// // Primitive data types are passed by value

// // Complex value types (Object, Array, Function)
// // Complex value types are stored in the memory
// // Complex value types are mutable
// // Complex value types are passed by reference

// //primitive values

// let x = 10;
// let y = x; // y is a copy of x
// x = 20;
// console.log(x, y); //20 10

// let firstperson = 'Umang';
// let secondperson = firstperson; // secondperson is a copy of firstperson
// firstperson = 'Jim';
// console.log(firstperson, secondperson); //Jim Umang

// const animals = ['cat', 'dog', 'lion'];
// const otheAnimals = animals;

// animals.push('elephant');
// console.log(animals); //['cat', 'dog', 'lion', 'elephant']
// console.log(otheAnimals); //['cat', 'dog', 'lion', 'elephant']

// //with objects
// const person= {
//     firstName: 'Umang',
//     lastName: 'Raval',
// }

// const otherPerson = person;

// person.firstName = 'Jim';
// console.log(person); 
// console.log(otherPerson); 

//explanation:
// person is an object and it is stored in memory
// otherPerson is a reference to the person object
// when we change the person object, the otherPerson object also changes because they are pointing to the same object in memory 
// this is called pass by reference
// this is different from primitive data types which are passed by value
// this is why we say that objects are mutable
// this is why we say that objects are stored in memory
// this is why we say that objects are passed by reference
// this is why we say that objects are reference types
// this is why we say that objects are complex data types

// const person1 = {name: 'Umang'};
// const person2 = {name: 'Umang'};
// console.log(person1 === person2); //false
//explantion in one line:
//objects are reference types, so they are not compared by value, they are compared by reference 
//in other words, objects are compared by memory address 
//this is why person1 and person2 are not equal, even though they have the same properties and values 

const person1 = {name: 'Umang'};
const person2 = person1;
console.log(person1 === person2); //true
//explanation:
//person1 is an object and it is stored in memory 
//person2 is a reference to the person1 object
//when we compare person1 and person2, we are comparing the memory addresses of the objects
//since person2 is pointing to the same object as person1, they are equal
//this is why person1 and person2 are equal, even though they have the same properties and values


//we just learned that objects are reference types
//we also learned that objects are compared by memory address
//we also learned that objects are passed by reference

//we just leaned that primitive values are copied by value and objects are copied by reference