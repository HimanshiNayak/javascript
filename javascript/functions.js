// arrow functions:short way of writing fi=nctions
 const arrowsum= (a,b)=>{
    console.log(a+b);
 }
 function  mul(a,b){
    return a*b;
 }

console.log(arrowsum(3,4));
console.log(mul(3,4));

const n =(a,b)=>{ //not to use it later
    return a*b;
}
console.log(n(45,5));

//fun to count the vowels in the term
let c=0;
function count(str){
    for(let char of str){
        if(char==='a'||char==='e'||char==='i'||char==='o'||char==='u'){
c++;
        }
    }
    console.log(`Number of vowels in ${str} is ${c}`);
}
count("hello world");

//using arrow function:

const vcount= (str)=>{
    for(let char of str){
        if(char==='a'||char==='e'||char==='i'||char==='o'||char==='u'){
c++;
        }
    }
    console.log(`Number of vowels in ${str} is ${c}`);
}
vcount("hello world");

//FOR ECAG=H LOOP : used when we wnat simple calculations
let arr=[1,2,3,4,5];
arr.forEach((val)=>{
    console.log(num*num);
});

//map : is used to create new array with modifications..
let newarr= arr.map((val)=>
{
    return val*2;
});
console.log(newarr);

//filter fun : filter outs some of the values:
let newar = arr.filter((val)=>{
    return val%2===0;
}); //return sthe even numbers

let na= arr.filter((val)=>{
    return val%2!==0;
}); //odd numbers

//reduce funtion: hepls when we want a single numbersas the answer of the array

let sumarr = arr.reduce((res , cur)=>{
    return res+cur;
});
console.log(sumarr);

//find the largesr=t using reduce:

let lararr= arr.reduce((pre,cur)=>{
    return pre>cur?pre:cur;
})
console.log(lararr);

 //practice:
// 1. filter the marks >90
let marks = [55,89,99,96,53,75,92,94];
let nm= marks.filter((val)=>{
    return val>90;
});
console.log(nm);


//2.take number as input fom user then  reduce to sum it up ;reduce to get the product

let x= prompt("Enter a number: ");
let ar=[];
for(let i=1;i<=x;i++){
    ar[i-1]=i;
}
console.log(ar);

let sa= ar.reduce((pre, cur)=>{
    return pre+cur;
});

let ma= ar.reduce((pre,cur)=>{
    return pre*cur;
});
console.log("sum= ",sa);
console.log("factorial = ",ma);