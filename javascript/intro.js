console.log("hello world");
//to use var we have define it as
//let var and const
//var :-can be redeclsred and updated..not used..global scope
var name = "Tony Strak";
// var a =52;                                    not recommendedd
var f=9.00;
var u= null; //no value 
var o= undefined ;//no defined value

//const is used for constants..block scope...only inside {}
const PI =3.14;
const E =2.718;

//let :block scope  
let nam="tony";
let c= 85;
console.log(c);
 let d=c+1;
console.log(d);  
//typeof : to get the type of the var
//7 primitive: number , string , boolean , undefined , null , bigint , symbol

//nonprimitive: functions and objects
//object creation:
//stored askey value pairs
const student ={
    fullName :"rahul kumar",
    age :20,
    cgpa:8.2,
    isPass:true,
};
console.log(student.age);
console.log(student["cgpa"]);
student.age = student.age+1;
console.log(student.age);

//let can be updated but const cant ...n=but const object can


