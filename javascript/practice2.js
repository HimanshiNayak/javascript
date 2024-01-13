//practice:
//1.user input and check if mul of  or not

// let n=prompt("Enter a number");
// if(n%5===0){
//     console.log(n,"is  a multiple of 5");
// }
// else{
//     console.log("Not a multiple of 5.");
// }

//2.print even number till 100
// let number=0;
// while(number<=100){
//     if(number%2===0){
//         console.log(number);
//     }
//     number++;
// }

//3.create a random number andprompt the user to uess the correct number but only 5 turns are provided

let gn=67;
 let num =prompt("Guess the game number: ");
//guess until the numbers are matched
 while (num!=gn){
    num=prompt("You guessed the wrong number .Try again ");
 }
 console.log("You have guessed the correct number.")
// }
// console.log("Sorry! Better Luck Next Time.")

