console.log("Welcome to Objects");
// //Objects

// const person = {
//     firstName:"Umang", // key : Value
//     lastName:"Raval",
//     age:21,
//     car : {
//         brand: 'Ford',
//         year: 2021,
//         color: 'red'
//     }
// };

// console.log(person);

// //Accessing , Adding and Updating property of an object

// const person = {
//     firstName:"Umang", // key : Value
//     lastName:"Raval",
//     age:21,
// };

// //accessing
// console.log(person.firstName);

// //adding
// person.dog = {name: 'Bruno', age: 2};
// person.age = 22;
// console.log(person.dog.name);

// //square bracket notation
// console.log(person['firstName']);

// //dynamic property
// const property = 'age' ; // we can use variable to access property
// console.log(person[property]);


// //dot notation

// const person = {
//     firstName:"Umang",
//     'this is a key': 'value',
// };
// //updating
// person.firstName = 'Raval';
// console.log(person.firstName);


// //Built in Methods

// const myObj = {
//     mymethod: () =>{

//     },
//     mymethod2: function(){

//     },
//     mymethod3(){

//     }
// }

// //calling fucntion in obejct
// const dog = {
//     name: 'Bruno',
//     age: 2,
//     bark: () => {
//         console.log('Woof Woof');
//     }
// }

// dog.bark();
// console.log(dog.name);
// console.log(dog.age);

// //to use this keyword in object we have to use function keyword
// const dog = {
//     name: 'Bruno',
//     age: 2,
//     listAllproperty: function() {
//         console.log(this.age,this.name);
//     }
// }

// dog.listAllproperty();



//Methods

// //initialize object
// const employee = {
//     boss: 'Umang',
//     secretary: 'Pam',
//     sales: 'Jim',
//     accountant: 'Oscar',
// };

// //find out all different keys or postions in object

// const poisions = Object.keys(employee); 
// //Object.keys() method returns an array of a given object's own enumerable property names

// console.log(poisions);

// //find out all different values in object
// const session = {
//     id: 1,
//     time: `26-08-2021`,
//     device: 'mobile',
//     browser: 'chrome',
// };

// //Object.values() method returns an array of a given object's own enumerable property values
// const sessionInfo = Object.values(session); 
// console.log(sessionInfo);



// //Object.entries() method returns an array of a given object's own enumerable string-keyed property [key, value] pairs

// //object.entries() 
// const operatingSystem = {
//     name: 'Ubuntu',
//     version: 18.04,
//     license: 'Open Source',
// };
// const entries = Object.entries(operatingSystem);
// console.log(entries);

// entries.forEach((entry) => {
//     let key =entry[0];
//     let value = entry[1];
//     console.log(`${key}: ${value}`);
// });


// //Object freeze
// //object.freeze() method freezes an object. A frozen object can no longer be changed; freezing an object prevents new properties from being added to it, existing properties from being removed, prevents changing the enumerability, configurability, or writability of existing properties, and prevents the values of existing properties from being changed. In addition, freezing an object also prevents its prototype from being changed. freeze() returns the same object that was passed in.

// const user = {
//     username: 'Umang',
//     password: '1234',
// };
// const admin = Object.freeze(user);

// admin.username = 'test';
// admin.password = '4321';

// console.log(admin);


// //Object.seal() 
// // Object.seal() method seals an object, preventing new properties from being added to it and marking all existing properties as non-configurable. Values of present properties can still be changed as long as they are writable.

// const user = {
//     username: 'Umang',
//     password: '1234',
// };
// const newUser = Object.seal(user);
// newUser.password = '4321';
// newUser.active = true;
// console.log(newUser);

