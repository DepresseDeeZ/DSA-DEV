//logic and control flow
console.log("logic and control flow");
//if statement
// const age =80;
// if(age>=18 && age <=70){
//     console.log("you may enter");
// }else if(age >70 ){
//     console.log("you are too old");
// }
// else{
//     console.log("no entery")
// }


//truthly and falsely value
// if(0){
//     console.log('in here');
// }else{
//     console.log('no inhere');
// }


// A falsy value is a value that is considered `false` when encountered in a boolean context. The following are the falsy values in JavaScript:

// 1. **`false`** - The boolean value `false`.
// 2. **`0`** - The number zero.
// 3. **`0`** - Negative zero (rarely used).
// 4. **`""` (empty string)** - A string with no characters.
// 5. **`null`** - Represents the absence of any value.
// 6. **`undefined`** - Indicates that a variable has been declared but not assigned a value.
// 7. **`NaN`** - Represents "Not-a-Number," typically as a result of an invalid mathematical operation.

// Any of these values, when evaluated in a boolean context, will be treated as `false`. For example:

// ```jsx
// if (0) {
//     console.log("This won't run.");
// } else {
//     console.log("This will run because 0 is falsy.");
// }

// ```

// ### Truthy Values

// A truthy value is any value that is not falsy. This means all values that are not one of the seven falsy values listed above are considered truthy. Some examples of truthy values include:

// 1. **`true`** - The boolean value `true`.
// 2. **Any non-zero number** - Such as `42`, `1`, etc.
// 3. **Non-empty strings** - Such as `"hello"`, `"false"`, etc.
// 4. **Objects** - Even empty objects `{}`.
// 5. **Arrays** - Even empty arrays `[]`.
// 6. **`Infinity` and `Infinity`** - Positive and negative infinity.

// In a boolean context, these values are treated as `true`. For example:

// ```jsx
// if ("hello") {
//     console.log("This will run because 'hello' is truthy.");
// } else {
//     console.log("This won't run.");
// }

// ```

// ### Summary

// - **Truthy values**: Values that evaluate to `true` in a boolean context (everything that is not falsy).
// - **Falsy values**: Values that evaluate to `false` in a boolean context (specifically `false`, `0`, `0`, `""`, `null`, `undefined`, and `NaN`).

// Understanding truthy and falsy values is important when writing conditional statements or working with logical operators in JavaScript.

// //inshort
// //falsely valyes are
// false
// 0
// ''
// null
// undefined
// Nan

//Logical operators part 2
// const age = 9;
// const isCool = true;
// if(isCool && age>18){
//     console.log("you may enter");
// }
// else{
//     console.log("you can't enter");
// }

// console.log('truthly' && 1 && 'test' && 999 );
// //here if all operands are true then it directly return the last value 

// console.log('truthly' && NaN && 'test' && 999 );
// // even if one falsely value exist then it weill return falsely value either 0 , Nan , false etc


// //or
// console.log('truthly' || 1 || 'test' || 999 );
// // if all value are truhtly then it will returns truhtly 

// console.log('truthly' || NaN || 'test' || 999 );
// // even if either one is falsely it will return truthly

// console.log('' || NaN || 0 ||9999);
// //  if all value are false then it will  return the last value in or operation


// //not
// console.log(!0); // will return true
// console.log(!!0); // will return false becuase !!0 - > !0 == true anmd !true ==false

// const value = true;

// if(!!value){
//     console.log("hi");
// }else{
//     console.log("no")
// }




// // Switch statement 
// const superhero = 'thor';
// switch(superhero){
//     case 'iron man':
//         console.log("i ma ironman");
//         break;

//         case 'thor':
//             console.log("i am thor");
//             break;

//     default:
//         console.log("i am captain america");
// }


//Ternary operator  

// if(condition ){
//     //block of code
// }
// else{
//     //block of code
// }

// condition? block of code:another  block of code

// if (age>=18){
//     console.log("you can drive");
// }else{
//     console.log("youi can't drive");
// }

// //else
// const age =18;

// age >=18 ? console.log("you can drive") : console.log("you can't drive")


//looops 

// //While Loops
// let i= 0;
// while(conditon){
//     //code
// }
// while(i<10){
//     console.log(i);
//     i++;
// }



// for loop
for(i=0;i<10;i++){
    console.log(i);
}

