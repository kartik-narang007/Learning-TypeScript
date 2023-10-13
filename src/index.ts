// enums in typescript

//enums are a list of related constants

//let's say we want to represent size of tshirts one way to represent is 

// const small = 1;
// const medium = 2;
// const large = 3;

//another way to group these constants in enums

const enum Size {Small = 1, Medium = 2, Large = 3}; //we can also use string value here
let mySize: Size= Size.Medium;

console.log(mySize);

//if we define this enum as constant the compiler will generate a more optimized code

//variable name: type = value(Size.medium)