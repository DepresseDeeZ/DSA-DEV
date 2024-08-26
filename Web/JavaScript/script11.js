console.log("Shallow Cloning");

//we know that object is copied by reference
//so how can we copy it completely and remove a refeernce
//how can we complete clone an object

// //1st way : Spread Operator

// const numbers = [1,2,3,4,5];

// const newNumbers = [...numbers];
// const copyNumbers = numbers;

// // copy by reference
// console.log(numbers===newNumbers);//false
// // copy by spread operator
// console.log(numbers===copyNumbers);//true

// numbers.push(6);

// console.log("numbers");
// console.log(numbers);

// console.log("newNumbers");
// console.log(newNumbers);

// console.log("copyNumbers");
// console.log(copyNumbers);


//Shallow cloning Objects

// const person = { name: 'Umang', age: 21};
// const newPerson = {...person};

// person.age = 22;
// console.log(person); 
// console.log(newPerson);


// //2nd way : Object.assign()
// const person = { name: 'Umang', age: 21};
// const newPerson = Object.assign({}, person);
// //What is object.assign() method
// //it is used to copy the values of all enumerable own properties from one or more source objects to a target object
// //it will return the target object
// //synatx of object.assign() method
// //Object.assign(target, ...sources)
// person.age = 22;
// console.log(person); 
// console.log(newPerson);