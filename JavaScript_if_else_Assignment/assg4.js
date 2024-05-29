

// 1) Write a program that reads a number and converts it to a positive number. If the given
// number is negative, convert it to a positive number and print it. Otherwise, print the given
// number.
// For example, if the given number is -5,
// -5 is a negative number.
// -5 should be converted to a positive number which is 5.
// The output should be 5.

// let number=prompt("enter A number");


// number=parseInt(number);



// if(number<0){
//     console.log(number);
//     number=-(number);
//     console.log("number is negative",number);
    
// }
// else{
//     console.log("number is positve",number);
// }


//--------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------


// 2) Write a program that reads the student's marks as input and prints PASS or FAIL.If the
// student has scored more than 50, print PASS. In all other cases print FAIL.
// In the given example, the student's marks are 85, which is more than 50,
// so the result should be PASS. Similarly, if the marks are 45, the result should
// be FAIL

// let marks=prompt("enter marks of student");
// marks=parseInt(marks);


// if(marks>=50){
//     console.log("Passsed");
// }else{
//     console.log("Failed");
// }


//--------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------

// 3) Write a program that reads two numbers A and B and prints the greatest among the two
// numbers.
// For example, if the given numbers are A=4 and B=3 , the output should be 4 as 4 is
// greater than 3.

// let FirstNum=prompt("Enter 1 Number");
// let SecondNum=prompt("Enter 2Number");

// FirstNum=parseInt(FirstNum);
// SecondNum=parseInt(SecondNum);

// if(FirstNum>SecondNum){
//     console.log(FirstNum);
// }
// else{
    
//     console.log(SecondNum);
// }

//------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------


// 4) Write a program that reads the age of a person and checks if the age of the person is greater
// than or equal to 18 for eligibility to vote. Print Eligible if the age of the person is greater than
// or equal to 18, otherwise print Not Eligible.
// For example, If the given age of a person is 15, the output should be Not Eligible
// as 15 is not greater than or equal to 18. If the given age of a person is 21, the
// output should be Eligible as 21 is greater than 18.

// let ageOfVoter=prompt("Enter The Age !")
// ageOfVoter=parseInt(ageOfVoter);

// if(ageOfVoter>=18)
// {
//     console.log("Eligible to Vote ");
// }
// else{
//     console.log("Not Eligible to Vote ");
// }


//------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------

// 5) Write a program to print the relation between two numbers, X and Y .
// Given X=2 , Y=5 As 2< 5 (X <Y) So the output is X< Y


// let A=prompt("ente number A");
// let B=prompt("ente number B");

// A=parseInt(A);
// B=parseInt(B);

// if(A>B){
//     console.log("A>B",A>B);
// }
// else
// {
//     console.log("A<B",A<B);
// }

//------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------

// 6) Write a program to check if the given two numbers are equal.
// For example, if the first number is 5 and the second number is 5. Since both the
// given numbers are equal. So the output should be "Equal". Whereas, if the first
// number is 10 and the second number is 5, both the numbers are not equal. So the
// output should be "Not Equal".


// let A=prompt("ente number A");
// let B=prompt("ente number B");

// A=parseInt(A);
// B=parseInt(B);
// if(A==B){
//     console.log("equal")
// }
// else{
//     console.log("not equal")
// }
//---------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------

// 7) Given the length and breadth of a box, check if it is a Rectangle or Square.
// For example, if the given length is 6, and the given breadth is 6, the length and
// breadth are equal. So the output should be "Square". Similarly, if the given length
// is 5, and the breadth is 10, the length and breadth are not equal. So the output
// should be "Rectangle"

//    let A=prompt("enter number A");
//    let B=prompt("enter number B");
//    B=parseInt(B);
//    if(A==B){
//          console.log("square")
//      }
//      else{
//          console.log(" rectangle")
//     }

//---------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------

// 8) Write a program that reads a temperature and checks if the given temperature is between
// 15 and 40. Print Can go for a walk if the given temperature is between 15 and 40, otherwise
// print Cannot go for a walk.
// For example, if the given temperature is 26, 26 is greater than 15. 26 is less than
// 40. So, 26 is between 15 and 40. The output should be Can go for a walk as 26 is
// between 15 and 40

// let temperature=prompt("enter the tempreture");
//     temperature=parseInt(temperature);

//     if(temperature>15 && temperature<40){
//         console.log("Can go for a walk");
//     }
//     else{
//         console.log("Cannot go for a walk");
//     }


//---------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------

// 9) Write a program that reads the size S and page count C of a book and checks if S is equal to
// large or C is greater than or equal to 300. Print Buy a Book if S is equal to large or C is greater
// than or equal to 300. Otherwise, print Do Not Buy a Book.
// For example, if the given size is S ="large" and the page count is C =80 , ✔S is
// equal to large. (large is equal to large) ✗ C is greater than or equal to 300. (80 is
// not greater than or equal to 300) The output should be Buy a Book as the size of
// the book S is equal to large

// let SizeOfbook=prompt('enter Size of book');

// let CountOfpage=prompt('enter Page count of book');
// CountOfpage=parseInt(CountOfpage);

// if((SizeOfbook=="large")||(CountOfpage>=300)){
//     console.log("Buy a Book");
// }
// else{
//     console.log(" Do Not Buy a Book");
// }

//--------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------

// 10) Write a program that reads two numbers A and B and checks if both A and B are less than or
// equal to 1000 or B is greater than 500. Print Pair if both A and B are less than or equal to
// 1000 or B is greater than 500. Otherwise, print Not a Pair.

// let A=prompt("ente number A");
// let B=prompt("ente number B");

// A=parseInt(A);
// B=parseInt(B);

// if( ( (A<=1000)&&(B<=1000) )&&(B>500) ){
//     console.log(" Print Pair");
// }
// else{
//     console.log(" Not a Pair.");
// }

//-------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------

// 11) Write a program that reads the scores A and B of two players and checks if one of the scores
// is greater than 300 and the sum of the scores is less than 500. Print Can team up if one of
// the scores is greater than 300 and the sum of the scores is less than 500, otherwise print
// Cannot team up.

// let A=prompt("ente Score of A");
// let B=prompt("ente Score of B");

// A=parseInt(A);
// B=parseInt(B);
// let sum=A+B;
// console.log(typeof(sum));

// if(  (A>300)||(B>300) ){
//          if(sum<500){
//                  console.log(" Can team up");
//             }
//          else{
//              console.log("Cannot team up");
//            }
//     }
// else{
//      console.log("wrong");
// }

//-------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------

// 12) Write a program that reads a number and checks if the given number is equal to 0 or
// positive. Print Zero if the given number is equal to 0. Print Positive if the given number is a
// positive number.
// Note: Positive numbers are numbers that are greater than 0.

// let number=prompt("enter number");
// number=parseInt(number);
// if(number==0){
//     console.log("Number Is Zero/",number);
// }
// else if(number>0){
//     console.log("Number Is Positive/",number);
// }


//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------

// 13) Write a program that reads a number and checks if the given number is zero, positive or
// negative. Print Zero if the given number is equal to 0. Print Positive if the given number is
// greater than 0. Print Negative if the given number is less than 0.
// let number=prompt("enter number");
// number=parseInt(number);
// if(number==0){
//     console.log("Number Is Zero/",number);
// }
// else if(number>0){
//     console.log("Number Is Positive/",number);
// }
// else{
//     console.log("Number Is Negative");
// }


//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------

// 14) Write a program that reads a number N and checks if N is greater than 10. Print the result of
// N+5 if N is greater than 10. Otherwise, print the result of N+1 .

// let N=prompt('Enter The Number');
// N=parseInt(N);

// if(N>10){
//     console.log(N+5);
// }
// else{
//     console.log(N+1);
// }

//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------

// 15) Write a program that reads the three angles A , B , and C of a Triangle and checks if the sum
// of the three angles of the Triangle is equal to 180, print Valid Triangle, Otherwise, print Not a
// Valid Triangle.

// let A=prompt('Enter The angle A');
// A=parseInt(A);

// let B=prompt('Enter The angle B')
// B=parseInt(B);

// let C=prompt('Enter The angle C');
// C=parseInt(C);

// let AngleSum=A+B+C;
// if(AngleSum==180){
//     console.log("Valid Triangle");
// }
// else{
//     console.log("Not Valid Triangle");
// }

//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------

// 16) Write a program that reads three numbers A , B , and C , and checks if each number is
// greater than 100. Print All are greater than 100 if each number is greater than 100.
// Otherwise, print Not all are greater than 100.

// let A=prompt('Enter The angle A');
// A=parseInt(A);

// let B=prompt('Enter The angle B')
// B=parseInt(B);

// let C=prompt('Enter The angle C');
// C=parseInt(C);

// if((A>100 )&& (B>100) && (C>100)){
//     console.log("All are greater than 100");
// }
// else{
//     console.log(" Not all are greater than 100");
// }



//---------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------

// 17) Write a program that reads a Room Number and checks if the Number in the given Room
// Number is less than 30. The Room Numbers are in the format of R1 , R35 , etc. Print Ground
// Floor if the Number is less than 30. Otherwise, print Not Ground Floor.


// let room_number=prompt('Enter Room Number');
// room_number=parseInt(room_number);
//  if((room_number>0)&&(room_number<30)){
//     console.log(" Ground Floor");
// }
// else{
//     console.log("Not  Ground Floor");
// }

//---------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------

// 18) Write a program that reads three numbers A , B , and C and checks if any of the given
// numbers is between 9 and 21.

// let A=prompt('Enter The angle A');
// A=parseInt(A);

// let B=prompt('Enter The angle B')
// B=parseInt(B);

// let C=prompt('Enter The angle C');
// C=parseInt(C);

// if((A>9)&&(A<21)||(B>9)&&(B<21)||(C>9)&&(C<21)){
//     console.log("In between 9 to 21");
// }
// else{
//     console.log("Not lies between 9 to 21");
// }