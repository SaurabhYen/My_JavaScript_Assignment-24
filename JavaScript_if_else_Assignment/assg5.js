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

// 9) Write a program that reads two numbers A and B and finds the,
// Result of A power B (A^B)
// Result of B power A (B^A)
// Print the greatest among the results of A power B (A^B ) and B power A (B^A).

// let  A=prompt("Enter number A ");
// A=parseInt(A);
// let  B=prompt("Enter number B ");
// B=parseInt(B);

// let A_power_B=A**B;
// let B_power_A=B**A;
// console.log("A_power_B",A_power_B);
// console.log("B_power_A",B_power_A);

// if(A_power_B>B_power_A){
//     console.log("A_power_B",A_power_B);
// }
// else{
//     console.log("B_power_A",B_power_A);
// }



//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------

// 10) Write a program that reads a number X and checks,
// If X is greater than 30.
// If X is greater than 30, check if X is also greater than 50.
// Print X is greater than 30 if X is greater than 30.
// Print X is greater than 30 and X is greater than 50 on each line if X is greater than 50
 
// let  X=prompt("Enter number X ");
// X=parseInt(X);
// if(X>30){
    
//         console.log("X is greater than 30 ");
    
//     if(X>50){
//         console.log("X is greater than 50 ");
//     }
// }
// else{
//     console.log("value less than 30 or wrong input")
// }




//----------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------

// 11) Write a program that reads the rank R of a student and checks,
// If R is less than or equal to 3.
// If R is not less than or equal to 3, check if R is less than or equal to 10.
// Print One of Top 3 if the R is less than or equal to 3.
// Print Not Top 3 but One of Top 10 if R is less than or equal to 10 but not less than or
// equal to 3.



// let R=prompt("Enter Rank of Student to che weather it is in top 3 or tp 10")
// R=parseInt(R);
//  if(R>0 && R<=3){
//     console.log("One of Top 3");
//     }
//   else if(R>3){
   
//         if(R<=10){
//             console.log(" Not Top 3 but One of Top 10");
//         }
//         else{
//             console.log(" Not Top 10, Rank is",R);
//         }
//     }
//     else{
//      console.log("Wrong Input");
//     }

//----------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------

// 12) Write a program that reads the weight W of a box in kg and checks,
// If W is greater than or equal to 100.
// If W is not greater than or equal to 100, check if W is greater than or equal to 30.
// Print Box is Heavier if W is greater than or equal to 100.
// Print Box is Heavy if W is not greater than or equal to 100 but greater than or equal
// to 30.

// let W=prompt("Enter The Weight");

// if(W>=100){
//     console.log(" Box is Heavier")
// }
// else if(W>0 && W<100){
//         if(W>30){
//             console.log("Box is Heavy");
//         }
//         else{
//             console.log("w is less than 30", W)
//         }
//     }
//     else{
//         console.log("wrong input");
//     }

//----------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------


// 13) Write a program that reads two strings H and I and checks,
// If H is equal to "Y".
// If H is not equal to "Y", check if I is equal to "Y".
// Print Allowed to Exam Has Hall ticket if H is equal to "Y".
// Print Allowed to Exam Has Identification Card if H is not equal to "Y" and I is equal to
// "Y".

// let  H=prompt("You have a Hall ticket ? Enter In Capital ");

// let  I=prompt("You have a Identification Card ? Enter In Capital ");


// if(H==="Y"){
//      console.log(" H===Y ,Allowed to Exam Has Hall ticket");
// }
// else if(H!=="Y"){
//     if(I==="Y"){
//         console.log(" I===Y ,Allowed to Exam Has Identification Card ");
//     }
//     else{
//         console.log(" Not Allowed");
//     }
// }
// else{
//     console.log(" Not Allowed");
// }

//----------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------


// 14) Write a program that reads a number N and checks if N is divisible by 5 and 10.
// Print Divisible by 10 if N is divisible by 10.
// Print Divisible by 5 if N is divisible by 5 but not divisible by 10.
// Print Not Divisible by 10 or 5 if N is not divisible by 10 and N is not divisible by 5

// let N=prompt("enter Number to check it is divisble by 5 and 10");
// N=parseInt(N);
// if(N%10===0){
//     console.log(" Divisible by 10");
// }
// else if(N%5===0 && N%10!==0){
//     console.log(" Divisible by 5    //(but not 10)");
// }
// else{
//     console.log(" Not Divisible by 10 or 5");
// }


//----------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------


// 15) Write a program that reads the marks M of a student and checks,
// If M is greater than or equal to 90.
// If M is greater than or equal to 50 but not greater than or equal to 90
// Print Discount is 200 if M is greater than or equal to 90.
// Print Discount is 100 if M is greater than or equal to 50 but not greater than or equal
// to 90.
// Print No Discount if M is not greater than or equal to 50.

// let M=prompt("enter marks M");
// M=parseInt(M);

// if(M>=90 && M<=100){
//   console.log("Discount is 200");
// }
//  else if(M>=50 && M<90){
//     console.log("Discount is 200");
// }
// else if(M>0 && M<50){
//     console.log("No Discount ");
// }
// else{
//    console.log( "wrong input");
// }


//----------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------

// 16) Write a program that reads the two scores A and B and compares A with the B .
// Print Win if A is greater than B .
// Print Draw if A is equal to B .
// Print Lose if A is less than B .


// let  A=prompt("Enter number A ");
// A=parseInt(A);
// let  B=prompt("Enter number B ");
// B=parseInt(B);

// if(A>B){
//     console.log( "Win");
// }
// else if(A===B){
//     console.log( "Draw");
// }
// else if(A<B){
//     console.log( "Lose");
// }
// else{
//     console.log( "werong input");
// }
