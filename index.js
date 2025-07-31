// let firstPromise = new Promise((resolve,reject) => {
//     console.log("Jatin");
//     reject(Error("server error"));
// })


// let firstPromise = new Promise((resolve, reject) => {
//     setTimeout(function sayMyName(){
//         console.log("My name is Jatin");
//     }, 10000);
//     // resolve(1);
// })


// function sayMyName(){
//     console.log("My name is Jstin");
// }
// setTimeout(sayMyName, 15000);



// let promise1 = new Promise((resolve, reject) => {
//     let success = true;
//     if(success){
//         resolve("Promise fullfilled");
//     }
//     else{
//         reject("promise rejected");
//     }
// });

// promise1.then((message) => {
//     console.log("first msg: " +message);
//     return "Promise fullfilled second message"
// }).then ((message) => {
//     console.log("second msg: " +message);
//     return "Promise fullfilled third message";
// }).then ((message) => {
//     console.log("third msg:" +message);
// });



// let promise1 = new Promise((resolve, reject) => {
//     let success = false;
//     if(success){
//         resolve(10);
//     }
//     else{
//         reject("Internal Server error");
//     }
// });

// promise1.then((message) => {
//     console.log("first msg: " +message);
//     return "20"
// }).then ((message) => {
//     console.log("second msg: " +message);
//     return "30";
// }).then ((message) => {
//     console.log("third msg: " +message);
// }).catch((error) => {
//     console.error(error);
// }).finally((message) => {
//     console.log("mein to chaluga kyu m hu FINALLY");
// });




// promise1.then((message) => {
//     console.log("msg is: " +message);
// }).catch((error) => {
//     console.log("error: " +error);
// })



let promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "First");
})
let promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, "Second");
})
let promise3 = new Promise((resolve, reject) => {
    setTimeout(reject, 4000, "Third");
})

Promise.all([promise3, promise2, promise1])
.then((values) => {
    console.log(values);
})
// .catch((error) => {
//     console.error(error);
// });
