// "use strict"
// this

// globalThis.name="saro";

// function show(){
//     console.log(this.name);
//     console.log(this);
// };
// show();


// const data={
//     name:"saro",
//     showAge:function(){
//         console.log(this)
//     }
// }
// data.showAge();
// const data2=data.showAge;
// data2();

// bind call apply

// globalThis.name="saro";

// function sayMyName(){
//     console.log(` Your name is ${this.name} `);
//     console.log(this);
// };
// sayMyName();
// const data={name:"Benita"};
// sayMyName=sayMyName.bind(data);
// sayMyName();

// // call
// sayMyName.call(data);
// sayMyName()

// apply

// globalThis.name="saro";

// function sayMyName(age,lastName){
//     console.log(age,lastName)
//     console.log(` Your name is ${this.name} `);
//     // console.log(this);
// };
// sayMyName(25,"Hashmi");
// const data={name:"Benita"};
// sayMyName.apply(data,[15,"Farzamnia"]);

// تغییر مقدار & اضافه کردن دو مقدار
// Getter & setter
// Get   & Set

// const data={
//     firstName:"Benita",
//     lastName:"Farzamnia",
// };
// const fullName= data.firstName + " " + data.lastName;
// console.log(fullName);
// const fullName2=` ${data.firstName} ${data.lastName} `;
// console.log(fullName2);

// Getter & Get
// const data2={
//     firstName:"Benita",
//     lastName:"Farzamnia",
//     get fullName3(){
//         return ` ${data.firstName} ${data.lastName} `;
//     },
// };
// console.log(data2.fullName3);

// Setter & Set
// const data3={
//     firstName:"Saro",
//     lastName:"Farzamnia",
//     get fullName4(){
//         return ` ${data3.firstName} ${data3.lastName} `;
//     },
//     set fullName4(string){
//         console.log(string)
//     },
// };
// console.log(data3.fullName4);
// data3.fullName4= "Benita Farzamnia";

// Closuer = The function returned in the one function


// State Retention |no => (اطلاعات پایداری)
// Encapsulation |ok => (اطلاعات امنیت)
// const like=()=>{
//     let likeCounter=0;
//     likeCounter++;
//     return likeCounter;
// };
// console.log(like());
// console.log(like());
// console.log(like());
// console.log(like());
// console.log(like());
// console.log(like());
// console.log(like());
// console.log(like());
// console.log(like());
// console.log(like());


// here we have State Retention but we didn't have Encapsulation
// let likeCounter=0;
// const like=()=>{
//     likeCounter++;
//     return likeCounter;
// };
// console.log(like());
// console.log(like());
// console.log(like());
// console.log(like());
// console.log(like());
// console.log(like());
// console.log(like());
// console.log(like());
// console.log(like());
// console.log(like());
// likeCounter+=211;
// console.log(like());


// Closuer
// State Retention |yes => (اطلاعات پایداری)
// Encapsulation |yes => (اطلاعات امنیت)

// function like(){
//     let likeCounter=0;
//     return function(){
//         likeCounter++;
//         return likeCounter;
//     };
// };
// const increaseLike=like();
// console.log(increaseLike());
// console.log(increaseLike());
// console.log(increaseLike());
// console.log(increaseLike());
// console.log(increaseLike());
// console.log(increaseLike());
// console.log(increaseLike());
// console.log(increaseLike());
// console.log(increaseLike());
// console.log(increaseLike());
// console.log(increaseLike());

// const increaseLike2=like();
// console.log(increaseLike2());
// console.log(increaseLike2());
// console.log(increaseLike2());
// console.log(increaseLike2());
// console.log(increaseLike2());
// console.log(increaseLike2());
// console.log(increaseLike2());
// console.log(increaseLike2());
// console.log(increaseLike2());
// console.log(increaseLike2());
// console.log(increaseLike2());

// const likeLike2=like();
// console.log(likeLike2());
// console.log(likeLike2());
// console.log(likeLike2());
// console.log(likeLike2());
// console.log(likeLike2());
// console.log(likeLike2());
// console.log(likeLike2());
// console.log(likeLike2());
// console.log(likeLike2());
// console.log(likeLike2());
// console.log(likeLike2());