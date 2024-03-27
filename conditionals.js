let color;
let mode ="pink";
if(mode==="dark-mode"){
    color="black"; 
}
else if(mode==="pink"){
    color= "pink";
}
else if(mode==="green"){
    color="green";
}
else{
    color="light";
}

console.log(color);

//can use to change the color acc

//ternary operator:
let age=25;
 let result =age>18?"adult":"not adult";
console.log(result);

//switch statment:

const exp= "Mangoes";
switch(exp){
    case 'Oranges':
        console.log("the price is rs120 per kg");
        break;
    case 'Mangoes':
        console.log("Price:160 per kg");
        break;
    case 'Banana':
        console.log("Price:100per kg");
    default:
        console.log("Sorry , we are out of ${exp}.")
}
//switch
let b ="Enter a fruit"
switch (b){
    case 'Papaya':
        console.log("Iprefer papayas more than other fruits")
        break;
        case 'Mangoes':
            console.log("I love mangoes")
            break;
        case 'Litchi':
            console.log("I love litchies more than other fruis")
            break;
        default:
              console.log("I dont like fruits")
}
console.log(`the fruit i named was ${b}`)
//ternayoperators:
let age =prompt("Enter your age")
let age =100
let va= (age>18 && age<=80)?"You can drive":"You cant drive"
console.log(va);


