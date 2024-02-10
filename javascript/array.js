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

let mark =[2,78,96]
let p = mark.join("-")// joins all the arr ele using the given sym
// and conerts it to string
let r = mark.shift()// removes firts ele 
let y= mark.unshift(58) //returns new arra length
mark.delete[2] // wont change the length of the arr just del the given indexs val
// concat more than 2 arrraa as well a3.concat(bp,ki)
//sort mthd sorts by conveting to str so sees the first no. and the sorts eg: 1 20 20000,41etc
//to arrange in ascending order
let compare =(a,b)=>{
    return b-a
} 
mark.sort(compare)
console.log(mark)

//for descending order
let compares = (a,b)=>{
    return a-b
}
mark.sort(compares)
console.log(mark)

//.reverse
//splice:to remove x and add y ele followed by the elements ..modifies the source arr , returns the deleted ele
//slice:removes y ele from array and removes a new array of those .. makes new array
let n =[1,5,4,7,89,100]


n.forEach((element) =>{
    console.log(element*element)
})
let ma =[88,96,74,85]
ma.forEach((element)) => {
    console.log(element+element)
})

//array.from : can create array  from other objects
let n1 ="naman"
let a1 = Array.from(n1)
console.log(a1)
//returns n,a,m,a,n
//for of gives the values .. while for in gives the index of the valus
for(let i in n){
    console.log(i)
}
for(let item of n){
    console.log(item)
}

//map :creates a new arr by doing some op on the existing arr
const array =[5,9,7]
let a2 = array.map((value)=>{
    console.log(value)
    return value+1
})
console.log(array)

let a3 = array.map((val)=>{
    console.log(val)
    return val+100
})


//get a user number and push it to arr
let arr = [1,5,7,8]
let a = prompt("Enter a number")
a = Number.parseInt(a)
arr.push(a)
console.log(arr)

//until number is one , give it to the array
let a ;
while(a!=0){ //cannot declare things in while
 a = prompt("Enter a number")
a = Number.parseInt(a)
arr.push(a)
}
console.log(arr)

let arr3=[1,5,8,9,7,2,4]  //filters al the ele div by 10
let newarr = arr3.filter((a)=>{
  return a%10==0;
})
console.log(newarr)

 //make an array out of the sq of the pre array
 let na = arr3.map((x)=>{
    return x*x
 })
 console.log(na)
