console.log("Welcome to Arrays");

// //Array
// const month = ['jan','feb','macrh','april','may','june', 'july' ,'august','sept','oct','nov ', 'dec'];
// console.log( month)

// console.log( typeof month)
// console.log( month[0])

// month[2] = "umang"
// console.log(month[2])


// console.log(month.length)

// const month = [
//     'apple',
//     {name:'john'},
//     true,
//     ()=>{


//     }
// ];

// console.log(month)


// //loop over array
// const month = ['jan','feb','macrh','april','may','june', 'july' ,'august','sept','oct','nov ', 'dec'];

// for(let i=0;i<month.length;i++){
//     console.log(month[i]);
// }


// //Array method
// const names = ['john','bob','harry','lisa'];
// console.log(names)
// //Array Push -> adds the new element containg the entered value to the end of the array
// names.push('Dean')
// console.log(names)

// //array pop
// console.log(names.pop())
// names.pop()
// console.log(names)

// //array shift
// names.shift();
// console.log(names)


// //array unshift

// names.unshift('Raj');
// console.log(names)


// //array splice
// names.splice(2,2,'Dean','Johnny','Jeus')
// console.log(names)

// //array slice
// const noOneLikeRaj = names.slice(1,3);
// console.log(noOneLikeRaj)


// Array ForEach
// const names = ['john','bob','harry','lisa'];

// for(let i=0;i<names.length;i++){
//     console.log(i,names[i])
// }

// names.forEach((values,i)=>{
//     console.log(values,i)
// });

// const na =(value,i)=>console.log(i,value) ;
// names.forEach(na);
// names.forEach((values,i)=>{
//     console.log(i,values)
// });

//foreach loop hacve return value of undefined

// let sum = 0;
// const numbers= [23,34,56,78];
// numbers.forEach((number)=>{
//     sum+=number;

// })

// console.log(sum)


// //Array map
// const inventory = [
//     {price:15,name:'eggs'},
//     {price:16,name:'bread'},
//     {price:15,name:'butter'},
//     {price:36,name:'soy'},
//     {price:25,name:'ketchup'},
//     {price:16,name:'milk'}
// ];

// const prices = inventory.map((item)=>{
//     console.log(item)
// });
// const prices = inventory.map((item)=> item.price);
// console.log(prices);

// const names = inventory.map((item)=>item.name);
// console.log(names);


//Array filter
// const numbers = [-10,-5,0,5,10];
// const pos = numbers.filter((number)=>number>=0);
// const neg = numbers.filter((number)=>number<0);

// console.log(numbers)
// console.log(pos)
// console.log(neg)

//a real life exmaple

// const employeeData = [
//     {name:'Sebastian',overtime:10},
//     {name:'Cardi',overtime:11},
//     {name:'Rajesh',overtime:6},
// ];

// const employeeToReward = employeeData.filter((employee)=>{
//     if(employee.overtime>=7){
//         return true
//     }
// });
// console.log(employeeToReward)


// console.log(employeeToReward)

// const employeeNames = employeeData.filter((employee)=>{
//     if(employee.overtime>=7){
//         console.log(employee.name);
//     }
// });
// const employeeToReward = employeeData.filter((employee)=>employee.overtime>=7);

// const employeeNames = employeeToReward.map((item)=>item.name);
// console.log(employeeNames)

// employeeNames.forEach((name)=> console.log(`${name} recived a reward`))

// //Array find
// const numbers = [1,2,3,4,5,6,7,8,9,10];
// const num5 = numbers.find((number)=>number>5)
// console.log(num5)

// //the first state start with Letter C
// //brute force
// const states = ['Alaska','Hawaii','California','Colorado'];

// const C = states.find((value)=>value[0]=='C');
// console.log(C)

// const states = ['Alaska','Hawaii','California','Colorado'];

// const C = states.find((value)=>value.startsWith('C'));
// console.log(C)

// //Array includes
// const array1 = [1,2,3];

// console.log(array1.includes(3));

// const animal = ['dog','cat','cow'];
// console.log(animal.includes('cat'))

// //bookshelf example
// const bookshelf = ["Moby sick","the Great GAstby","Pride and Prejudes"];
// if(bookshelf.includes("The Great GAstby")===true){
//     console.log("We have that book");
// }
// else{
//     console.log("WE cannot find the book sorry")
// }

// //Array sort
// const names = ['anne','carl','bob','dean'];
// names.sort();
// console.log(names)

// const numbers = [6,3,5,9,1,0];
// numbers.sort();
// console.log(numbers)


// //ascendeing order
// const numbers = [6,3,5,9,1,0,11,22,44,90];
// numbers.sort((a,b)=>a-b); // this going to sort numebr in ascending order
// console.log(numbers)

// //decending order
// numbers.sort((a,b)=>b-a); // this going to sort numebr in ascending order
// console.log(numbers)

// // Array some
// const arrays = [1,2,3,4,5];

// const greaterthan3 = (Number)=> Number>3 ;
// console.log(arrays.some(greaterthan3)) //true
// //check if some element in the array are greater than three
// //simply it just provide true or flase value




// // Array Every
// console.log(arrays.every(greaterthan3)) //false

// Array Reduce

// const groceryList = [29,12,45,35,86,110];

// let sum =0;
// groceryList.forEach((Number)=>{
//     sum+=Number;
// })
// console.log(sum)

// const groceryList = [29,12,45,35,86,110];
// const total  = groceryList.reduce((accumulator,curretnvalue)=>{
//     return accumulator+curretnvalue;
// },0)
// console.log(total)


// const numbers = [1,2,3,4,5];
// //sum of this number
// const n = numbers.reduce((acc,val)=>{
//     return acc+val;
// },0)
// console.log(n)

// step by step
//acc =0 , val = 1 then add value then we get 1 and 1 becomes the accumlator
//acc =1 , val =2
//acc =3 , val =3
//acc =6 ,val 4
//acc = 10 ,val =5
//acc =15

