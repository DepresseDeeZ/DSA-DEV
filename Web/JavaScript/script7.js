console.log("Welcome to Strings");

// //String
// const single = 'this is Single Quoted String';
// const double = "This is double Quoted string";

// const backticks = `we use mathematcial equatio to solve this 2+2= ${2+2}`;
// console.log(single);
// console.log(double);
// console.log(backticks);

// const sum = (a,b) => a+b;

// const t = `the sum is ${sum(2,10)}`;
// console.log(t)

// //we can also use them for multiple line too
// const row = `1
// 2
// 3
// 4
// `;
// console.log(row)

// //or to writye '' or double "" you cna use \' or \" to write this 
// //you can use backtick to write quotes liek '' or " ";
// const backtick = ` hello "double" and you are 'single`;
// console.log(backtick)


// //String Length and basic property

// const name = 'john';
// console.log(name.length);

// //first letter of a string or any letter use [n] -> where n is any number from 0 to nth number
// const name = 'john';
// console.log(name[0]);

// // nowe to get last 
// // letter decremnt by 1 because string start with 0 and end with n-1
// const name = 'john';
// console.log(name[name.length-1]);


// //Case 
// //Upper case and Lower case


// const mixedstring = 'Hello , My Name is Umang';

// //lowerCase
// const tolower = mixedstring.toLowerCase();
// console.log(tolower);

// //lowerCase
// const toupper = mixedstring.toUpperCase();
// console.log(toupper);


// //Searching for substring

// //indexOf()

// const hobbies = 'I Like Javascript ,html and css and many more things';
// const index =hobbies.indexOf('html');
// console.log(index)

// //lastIndexOF()
// const hobbies = 'I Like Javascript ,html and css Javascript html';
// const findex =hobbies.indexOf('html');
// const lindex = hobbies.lastIndexOf('html');
// console.log(findex,lindex);

// //inlcudes()

// const hobbies = 'I Like Javascript ,html and css Javascript html';
// const h = hobbies.includes('Javascript');
// console.log(h)

// //startswith() 
// //endswith()
// const hobbies = 'I Like Javascript ,html and css Javascript html';
// console.log(hobbies.startsWith('I'));
// console.log(hobbies.startsWith('html'));


// //Getting a Substring
// const exmaplestring = 'hotdog';

// //slice();
// const slice = exmaplestring.slice(3,6);
// console.log(slice)

// //split
// const exmaplestring = 'dog jumps over the lazuy cat';
// const split = exmaplestring.split(' ');
// console.log(split)


// //reverse repeat and trim

// const exmaplestring = 'test';
// const reverse = exmaplestring.split("").reverse().join('');
// console.log(reverse)

// // const exmaplestring = 'dog jumps over the lazy cat';
// // const reverse = exmaplestring.split(' ').reverse().join();
// // console.log(reverse)


// //repeat
// const dog = 'bark';
// const repeat = dog.repeat(4);
// console.log(repeat)

// //trim
// const exampletrim= '    hello ,Wolrd!   ';
// console.log(exampletrim.trim());

// //exercise
// const guest=  'Our guest are: emma, jacob, isabella, ethan';
// //1
// const length = guest.length;
// console.log(length)

// //2
// const uppercasedGuestList = guest.toUpperCase()
// console.log(uppercasedGuestList)

// //3
// const isEthanOnList = uppercasedGuestList.includes('ETHAN');
// console.log(isEthanOnList);

// //4

// const substringGuests = uppercasedGuestList.slice(15);
// console.log(substringGuests)

// //5
// const guests = substringGuests.split(", ");
// console.log(guests)

