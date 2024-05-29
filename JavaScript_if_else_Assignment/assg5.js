// 1) Write a program that reads two numbers A and B , and prints the remainder when A is
// divided by B .




// let A=prompt('enter number A');
// let B=prompt('enter number B');
// A=parseFloat(A);
// B=parseFloat(B);

// if(A>B){
//     let remainder=A%B;
//     console.log(remainder);
// }
// else{
//     console.log(" as A<B remainder cannot be found");
// }

//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------


// 2) Write a program that reads a number N and checks if the number N is divisible by 7. Print
// Divisible by Seven if N is divisible by 7. Otherwise, print Not Divisible by Seven.

// let N=prompt("Enter number to check it divisible by 7 or not");
// N=parseInt(N);

// if(N%7==0){
//     console.log("divisible by 7");
// }
// else{
//     console.log("not divisible by 7");
// }



//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------

// 3) Write a program that reads two numbers A and B and prints the Quotient and Remainder
// when A is divided by B . 

// let A=prompt('enter number A');
// let B=prompt('enter number B');
// A=parseFloat(A);
// B=parseFloat(B);

    // let Quotient=A/B;
    // let remainder=A%B;
    // console.log("quotient =",Quotient);
    // console.log("remainder =",remainder);

// if(A>B){
    
//     let Quotient=A/B;
//     let remainder=A%B;
//     console.log("quotient =",Quotient);
//     console.log("remainder =",remainder);
// }
// else{
//     console.log("wrong input as B>A");
// }




//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------


// 4) Write a program that reads a number N and checks if N is divisible by 2.


// let N=prompt("Enter number to check it divisible by 2 or not");
// N=parseInt(N);

// if(N%2==0){
//     console.log("divisible by 2");
// }
// else{
//     console.log("not divisible by 2");
// }





//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------

// 5) Write a program that reads a number N and checks if N is divisible by 2. Print Even if N is
// divisible by 2. Otherwise, print Odd.


// let N=prompt("Enter number to check it even or odd");
// N=parseInt(N);

// if(N%2==0){
//     console.log("Even");
// }
// else{
//     console.log("Odd");
// }



//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------


// 6) Write a program that reads a number N and finds the, Remainder when N is divided by 4.
// Remainder when N is divided by 5. Print the greatest remainder among the two remainders
// when N is divided by 4 and 5.

// let N=prompt("Enter number to check it even or odd");
// N=parseInt(N);

// let remainder_whendvd_by_4=N%4;

// console.log("remainder_whendvd_by_4",remainder_whendvd_by_4);

// let remainder_whendvd_by_5=N%5;

// console.log("remainder_whendvd_by_5",remainder_whendvd_by_5);

// if(remainder_whendvd_by_4>remainder_whendvd_by_5)
//     {
//     console.log("remainder_whendvd_by_4",remainder_whendvd_by_4);
// }
// else if(remainder_whendvd_by_4==remainder_whendvd_by_5){
//     console.log("remainder are Same");
// }

// else
// {
//     console.log("remainder_whendvd_by_5",remainder_whendvd_by_5);
// }





//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------

// 7) Write a program that reads a number N and checks if the remainder is 0 or 1 when N is
// divided by 11.
// Print Special Eleven if the remainder is 0 or 1 when N is divided by 11.
// Otherwise, print Normal Number


// let N=prompt("Enter number to check it is special eleven or not");
// N=parseInt(N);

// let remainder=N%11;
// console.log("remainder",remainder);
// if((remainder==0)||(remainder==1)){
//     console.log("Special Eleven");
// }
// else{
//     console.log("Normal Number");
// }





//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------

// 8) Write a program that reads a two-digit number N and checks if any of the given conditions is
// satisfied.
// The sum of digits of N is equal to 7.
// One of the digits of N is equal to 7.
// N is divisible by 7.
// Print Special Number if any of the given conditions is satisfied. Otherwise, print
// Normal Number.


// let  N=prompt("Enter number two digit number to check it is special Number or not ");
// N=parseInt(N);

// if(N>9 && N<99){
//        N=N.toString();
//        let  fdigit=parseInt(N[0]);
//        let  sdigit=parseInt(N[1]);
//        let sum_of_dgt=fdigit+sdigit;
//        sum_of_dgt=parseInt(sum_of_dgt);
//        console.log("sum_of_dgt",sum_of_dgt);
//        if(sum_of_dgt==7){
//         console.log("Special Number____sumof digit",sdigit);
//        }
//        else if((fdigit==7)||(sdigit==7)){
//         console.log("Special Number___one dtgt equal to 7");
//        }
//        else if(parseInt(N)%7==0){
//         console.log("Special Number__ remainder is",(parseInt(N)%7));
//        }
//        else{
//         console.log("Normal Number");
//        }
// }
// else{
//     console.log("wrong input");
// }

//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------