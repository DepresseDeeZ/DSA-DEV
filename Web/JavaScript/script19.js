console.log("object Desturcturing");

const person = {
    firstName: "John",
    lastName: "Doe",
    car  :{
        brand:"Ford",
        model:"Mustang"
    },
    animals : {
        dog:{
            name:"Rocky",
            breed:"German Shepherd"
        },
        cat:{
            name:"Misty",
            breed:"Persian"
        }
    }
}

// //Dry run
// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person.car.brand);
// console.log(person.car.model);
// console.log(person.animals.dog.name);
// console.log(person.animals.dog.breed);
// console.log(person.animals.cat.name);
// console.log(person.animals.cat.breed);

// //more advanced way
// const {firstName,lastName,car:{brand,model},animals : {dog,cat}} = person;

// console.log(firstName);
// console.log(lastName);
// console.log(brand);
// console.log(model);
// console.log(dog.name);
// console.log(dog.breed);
// console.log(cat.name);
// console.log(cat.breed);


// //node
// const test = (req,res)=>{
//     const {method,url} = req;


// }

// //react
// const component = (props)=>{
//     const {name,age} = props;
// }

//array destructuring

const introdution = ["hello","I am","John","Doe"];
// const greeting = introdution[0];
// const name = introdution[2];

const [greeting, ,name] = introdution;
// add empty space to skip the value suign "," in the array
console.log(greeting,name);
