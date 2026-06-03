//primitive data types  7 types
//string  number boolean null undefined  symbol   bigInt

//reference(non primitive)
//array objects functions

const id = Symbol('123');
const anotherId = Symbol('123')
//console.log(id == anotherId);

//bigint = number ending with n
const bigNumber = 658328393621837n
//console.log(typeof bigNumber)

//arrays
const fruits = ["apple" , "mangoes" , "guava"];

//objects
let myObj = {
    name: "aditi",
    age : 19,
}

//function
const myFunction = function(){
    console.log("hello world");
}

//memory*******************************************************
// in primitive type stack is used
//we get a copy of all variables we created
//in non primitiv type heap is used
//we get reference of original value so whatever changes we make then will also get changed in original value

let myName = "aditi"
let anotherName = myName
//another name is getting the copy of my name so changes are done in copy not the original name
anotherName = "aditeeee"
console.log(myName)
console.log(anotherName)

let userOne = {
    email : "user@google.com",
    password : "user@ybl"
}
let userTwo = userOne
userTwo.email = "aditi@googlr.com"
//the other one is getting the same reference in heap as the first so if cange is made in one it also affects the other one
console.log(userOne.email);
console.log(userTwo.email);