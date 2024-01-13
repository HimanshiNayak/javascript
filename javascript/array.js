//muttable
//array.length can giv the length//in js they are of the type obj
// let marks=[55,89,75,63,78];
// console.log(marks);
// console.log(marks.length);
let cities =["delhi","mumbai","pune","maharastra"];
for(let i of cities){
console.log(i.toUpperCase());
}
let name=["    himanshu","ayush    ","abhay     ","aniket"];
for(let i of name){
    console.log(i.trim())
}

//1.given an array of marks : calculate the average marks of the entire class

let marks=[100,80,90,70,100,50];
let sum =0;
for(let i of marks){
sum+=i;
}
let average = sum/marks.length;
console.log(`average marks of the class are ${average}`);

//2.apply 10%off 

let price=[1000,9000,6000,8000,7000];
// for(let i of price){
//     i =i-i*(10/100); cannot be used as gives us the values dircrtly not the index
 
// }

//indexing using the for of loop

let i=0;
for(let val of price){
    let offer = val/10;
    price[i]= price[i]-offer;
    console.log(`value after the offer is applied is : ${price[i]}`) ;//herer val cannot be used as it gives the original value not the offerc one
    i++;
}
let prices=[1000,9000,6000,8000,7000];

//using for loop
for(let i=0;i<prices.length;i++){
    let ofer = prices[i]/10;
    prices [i]-= ofer;
}
console.log(price);

//array methods:

let a=["mango","banana","orange","cherries"];
a.push("litchi");
console.log(a);
let deleted = a.pop();
console.log(`deleted item: ${deleted}`);
console.log(a.toString()); //gives a new array//converts the whole array to a single string

let b=["chips","chocobar","munch"];
console.log(a.concat(b)); //gives a new array

//unshift: add elemenst in the begining
//shift : delete from begining
console.log(b.unshift("cherries"));

let deletes= b.shift();
console.log(b);

//slice : gives a new array with the elemenets we want

let c = a.slice(1,3) ; //3 is exclusive
console.log(c);

//splice :changes the original array// add remove and replace(strindex, delcount,new elem);
let d =[1,2,3,4,5,6,7,8,9];
d.splice(2,2,101,102)// starting fro the second index .. dleteds 2 elements an dthen add the new items on their place
console.log(d); // and keeps the after wards as it is

a.splice(1,1,"tomato");
console.log(a);

//just adding usings plice
//eg: adding after element 2
a.splice(2,0,"potato");
console.log(a);

//deletion
a.splice(2,1);
console.log(a);

//replace
a.splice(1,1,"dragonfruit");
console.log(a);

//practice

let companies=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
companies.shift(); // to remove the first one
companies.splice(2,1,"Ola");//remove uber and add ola
companies.push("Amazon");//add amazon at the last
console.log(companies);