spread and Rst oeprator (...)


const add = (a,b) =>{
    return a+b;
}

console.log(add(1,2,3,4,5,6)); // onyl 3 will be added and rest will be ignored

//to solev this we can use rest operator
//rest oeprator and reduce
const add =(...args)=>{
    return args.reduce((acc,val)=>acc+val);
};
console.log(add(1,2,3,4,5,6));

spread operator

const arr = [1,2,3,4,5,6];
console.log(arr);

const arr = [1,2,3,4,5,6];
console.log(...arr);

const arr = [1,2,3,4,5];
arr.push(6);
console.log(arr);


const arr = [1,2,3,4,5];
const arr2 = [...arr,6];
console.log("original array");
console.log(arr);
console.log("new array");
console.log(arr2);

//using this concept in objects
const obeject = {name:"john",age:26};
const object1= {...obeject,city:"chicago"};

console.log("original object");
console.log(obeject);
console.log("new object");
console.log(object1);