console.log("Asynchronous JavaScript");
// Asynchronous Code

//setinterval
// const myInterval =setInterval(()=>console.log("hello world"),1000);
// console.log(myInterval)

// clearInterval(myInterval);


// //setTimeout
// const myInterval = setTimeout(()=> console.log('Hello , world!'),5000);
 
// //cleartimeout
// clearTimeout(myInterval)

// setTimeout(() => {
//     console.log('Hello World!')
// }, 5000);

// console.log("hello nworld at bottom");


//Synchronous Code
// Synchronous JavaScript is one in which the code is executed line by line and their tasks are completed instantly, i.e. there is no time delay in the completion of the tasks for those lines of code.

// const function1 = () =>{
//     console.log("fucntion One");

//     fucntion2();

//     console.log("Fucntion One , part 2")
// }

// const fucntion2 =() =>{
//     console.log("Fucntion two"); 
// }

// function1()


// //now Asynchronous code
// const function1 = () =>{
//     console.log("fucntion One");

//     fucntion2();

//     console.log("Fucntion One , part 2")
// }

// const fucntion2 =() =>{
//     setTimeout(()=>console.log("Fucntion two"),2000)
// }

// function1()

// //DataFecthing

// //API

// console.log("Fetching ......")
// const fetchUser = (username,callback)=>{
//     setTimeout(()=>{
//         console.log("now we have user"); 
//         callback({username});
//     },2000);
// };
// fetchUser('umang',(user)=>{console.log(`Your name is ${user.username}`);});




/*----------------------------------------------------------------------*/

// //Callback Hell
// const fetchUser = (username,callback)=>{
//     setTimeout(() => {
//         console.log("now we have the user")
//         callback({username});
//     }, 2000);
// }

// console.log("Fecthing...");

// const fetchUserPhotos = (username,callback)=>{
//     setTimeout(() => {
//         console.log(`now we have the photos for ${username}`)

//         callback(['photo1','photo2']);
        
//     }, 2000);

// }

// const fetchPhotoDetails = (photo,callback)=>{
//     setTimeout(() => {
//         console.log(`now we have the photos details for the photo ${photo}`)

//         callback('Details..');
        
//     }, 2000);
// }

// fetchUser('Umang',(user)=>{
//     console.log(`username is ${user.username}`)

//     fetchUserPhotos(user.username,(userPhots)=>{
//         console.log(`your photos are ${userPhots}`)

//         fetchPhotoDetails(userPhots[0],(details)=>{
//             console.log(`Your photo details are : ${details}`);
//         });
//     });
// });




/*----------------------------------------------------------------------*/


//promises
//they are objects that either return the successfully  fetched data or the error .

// const fetchUser = new Promise((resolve ,reject)=>{
//     setTimeout(() => {
//         console.log('[Now we have the user]');

//         reject("user Not found 404")
//         resolve({username: 'Michael'})
        
//     }, 2000);
// })

// //call promises
// fetchUser.then((user)=>{console.log(user.username);});
// fetchUser.catch((error)=>{console.log(error)});


/*----------------------------------------------------------------------*/

//Call back Hell Soltuion using promises
// const fetchUser = (username)=>{
//     return new Promise((resolve ,reject)=>{
//     setTimeout(() => {
//         console.log('[Now we have the user]');

//         resolve({username})
//     }, 2000);
// });
// };



// console.log("Fecthing...");

// const fetchUserPhotos = (username,callback)=>{
//     return new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         console.log(`now we have the photos for ${username}`)

//         resolve(['photo1','photo2']);
//     }, 2000);
// })
// }

// const fetchPhotoDetails = (photo,callback)=>{
//     return new Promise((resolve,reject)=>{

//     setTimeout(() => {
//         console.log(`now we have the photos details for the photo ${photo}`)

//         resolve('Details..');
        
//     }, 2000);
// });
// }

// //fucntion without using callback
// //instead using promises

// fetchUser('Micheal')
// .then((user)=> fetchUserPhotos(user.username))
// .then((photos)=>fetchPhotoDetails(photos[0]))
// .then((details)=> console.log(`Your photo detials are ${details}`));


/*----------------------------------------------------------------------*/

// //ASYNC fucntion returns promises
// const fetchNumber = async ()=>{
//     return 25

// }
// // console.log(fetchNumber())

// // //retrive number in promises of async await
// // fetchNumber().then((number)=>console.log(number));


// // using await
// const consoleFetchNum = async () =>{
//     console.log(await fetchNumber())
// }

// consoleFetchNum()

/*----------------------------------------------------------------------*/



const fetchUser = (username)=>{
    return new Promise((resolve ,reject)=>{
    setTimeout(() => {
        console.log('[Now we have the user]');

        resolve({username})
    }, 2000);
});
};



console.log("Fecthing...");

const fetchUserPhotos = (username,callback)=>{
    return new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log(`now we have the photos for ${username}`)

        resolve(['photo1','photo2']);
    }, 2000);
})
}

const fetchPhotoDetails = (photo,callback)=>{
    return new Promise((resolve,reject)=>{

    setTimeout(() => {
        console.log(`now we have the photos details for the photo ${photo}`)

        resolve('Details..');
        
    }, 2000);
});
}

// //fucntion without using callback
// //instead using promises

const displayData = async () =>{
   const user = await fetchUser('Umang');
   const photo = await  fetchUserPhotos(user.username);
   const details =await fetchPhotoDetails(photo[0]);
   console.log(details);
}

displayData()