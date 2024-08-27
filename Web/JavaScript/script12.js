console.log("Deep Cloning");

// const person = {
//     firstName: 'Umang',
//     car: {
//         brand: 'Ford',
//         year: 2020,
//         color: "blue"
//     }
// };

// const newPerson = {...person,car:{...person.car}};
// newPerson.firstName = 'Jim';
// newPerson.car.brand = 'Toyota';

// console.log(person);
// console.log(newPerson);

//what happen
// even if we clone the object we are still copying the reference of the nested object
// so we are not completely cloning the object
// this is called shallow cloning

//here umang and jim firstName are changed using spread operator
//however the car object is still the same
//this is because we are copying the reference of the car object



// const person = {
//     firstName: 'Umang',
//     car: {
//         brand: 'Ford',
//         year: 2020,
//         color: "blue"
//     }
// };

// const newPerson2 = JSON.parse(JSON.stringify(person));
// newPerson2.firstName = 'Jim';
// newPerson2.car.brand = 'Toyota';

// console.log("this is person");
// console.log(person);
// console.log("this is newPerson2");
// console.log(newPerson2);

// //Json.stringify() method and Json.parse() method
// const stringPerson = JSON.stringify(person);
// const newPerson = JSON.parse(stringPerson);
// console.log("this stringify give string value");
// console.log(stringPerson);
// console.log("this parse give object value");
// console.log(newPerson);

//or simply use