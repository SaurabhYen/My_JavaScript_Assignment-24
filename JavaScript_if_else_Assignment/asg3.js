// 1) Write a program that reads a number and checks if the given number is greater than 70.
// Explanation:
// For example, if the given number is 86, the output should be True as 86 is greater than 70.

// let readNumber=prompt("Enter A Number");
// readNumber=parseInt(readNumber);

// if(readNumber>70){
//     console.log("Number is Greater than 70  True");
// }
// else if(readNumber<=70){
//     console.log("Number is Not Greater than 70  False");
// }
// else{
//     console.log("Wrong Input");
// }

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 2) Write a program that reads two numbers and checks if the first number is greater than the
// second number.
// Explanation:
// For example, if the given numbers are 6 and 4, the output should be True as 6 is greater than 4.

// let firstNum=prompt("Enter First Number");
// firstNum=parseInt(firstNum);

// let secondNum=prompt("Enter Second Number");
// secondNum=parseInt(secondNum);

// if(firstNum>secondNum){
//     console.log("first Number is greater than second, True");
// }
// else if(firstNum<secondNum){
//     console.log("first Number is Not  greater than second, False");
// }
// else if(firstNum=secondNum){
//     console.log("first Number and Second Number are same");
// }
// else{

//     console.log("Wrong Input");
// }

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 3) Write a program that reads a number and checks if the given number is a negative number
// Note: Negative numbers are numbers that are less than zero
// Explanation:
// For example, if the given number is 25, the output should be True as 25 is less than zero

// let GivenNum=prompt("Enter Number to check");


// if(GivenNum>0){
//     console.log('given number is positive and grater than zero, true');
// }
// else if(GivenNum<0){
//     console.log('given number is Negative and less than zero, False');
// }
// else{
//     console.log("wrong input");
// }

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 4) Write a program that reads two words and checks if the given two words are the same
// Explanation:
// For example, if the given words are Jam and Jam,
// The output should be True as both the words Jam and Jam are the same.

// let fWord=prompt("Enter the First word");
// let sWord=prompt("Enter the Second word");

// if(fWord==sWord){
//      console.log("True");
// }
// else if(fWord!=sWord){
//     console.log("False");
// }
// else{
//     console.log("Wron input");
// }

// how to get only string input from the prompt ?



// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 5) Write a program that reads a day number and checks if the given day is a Sunday


// let dayNumber=prompt("enter the Day Number from 1 to 7");

// if(dayNumber==7){
//     console.log('Sunday ,True');
// }
// else if((dayNumber==1)||(dayNumber==2)||(dayNumber==3)||(dayNumber==4)||(dayNumber==5)||(dayNumber==6)){
//     console.log('Not Sunday , False');
// }
// else{
//     console.log('wrong input');
// }



// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 6) Write a program that reads two numbers and checks if the given two numbers are not the
// same.
// Explanation:
// For example, if the given numbers are 2 and 3, the output should be True as 2 is not equal to 3.


// let fNum=prompt("Enter the First Number");
// let sNum=prompt("Enter the Second Number");

// if(fNum==sNum){
//      console.log("False , both are same");
// }
// else if(fNum!=sNum){
//     console.log("True, both are not Same");
// }
// else{
//     console.log("Wron input");
// }


// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 7) Write a program that reads two numbers A and B and checks if A is greater than or equal to
// B . Print the result as shown in the sample output.
// Explanation:
// For example, if the given numbers are A = 4.3 and B = 3.2 ,
// • A is greater than or equal to B : True. (4.3 is greater than or equal to 3.2)
// • Add the string "A >= B is" before True.
// The output should be A >= B is True.

// let A=prompt('Enter the Number A');
// A=parseFloat(A);

// let B=prompt('Enter the Number B');
// B=parseFloat(B);

// if(A>=B){
//     console.log("A>=B, True");
// }
// else if(A<B){
//     console.log("A<B, false");
// }
// else{
//     console.log("Wrong input");
// }


// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 8) Write a program that reads two numbers and checks if the first number is less than or equal
// to the second number.
// Explanation:
// For example, if the given numbers are 2 and 5.3, the output should be True as 2 is less than 5.3.

// let fNum=prompt('Enter First number');
// fNum=parseFloat(fNum);

// let sNum=prompt('Enter Second number');
// sNum=parseFloat(sNum);

//      if(fNum<=sNum){
//     console.log("A<=B, True");
//     }
//     else if(fNum>=sNum){
//         console.log("A>B, false");
//     }
//     else{
//         console.log("Wrong input");
//     }


// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 9) Write a program that reads two numbers A and B and checks if the A is greater than B . Print
// the result as shown in the sample output.
// Explanation:
// For example, if the given numbers are A=8 and B=5 ,
// • A is greater than B : True. (8 is greater than 5)
// • Add the string "A > B is " before True.
// The output should be A > B is True.

// let A=prompt('Enter the Number A');
// A=parseFloat(A);

// let B=prompt('Enter the Number B');
// B=parseFloat(B);


// if(A>B){
//     console.log("A>B",true);
// }
// else{
//     console.log(false);
// }


// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 10) Write a program that reads two numbers A and B , and checks if B is greater than A by one.
// Explanation:
// For example, if the given numbers are A=2 and B=3 ,
// The B is greater than A by only one.
// The output should be True as B is greater than A by one.


// let A=prompt('Enter the Number A');
// A=parseInt(A);
// console.log("A",A);
// let B=prompt('Enter the Number B');
// B=parseInt(B);
//     A+=1;
   
//     console.log("B",B);

// if(B==(A)){
//     console.log(true);
// }
// else{
//     console.log(false);
// }


// ------------------------------------------------------------------------------------------------------------------------------------------------------

// 11) Write a program that reads a word and checks if the first letter and last letter of the word
// are not the same.
// Explanation:
// For example, if the given word is “Python”,
// The output should be True as the first letter “P” and the last letter “n” of the word are not the same

// let string=prompt('Enter the Word');

// console.log(string[0]);
// console.log(string.length);
// console.log(string[string.length-1]);

// if(string[0]==string[string.length-1]){
//     console.log("same")
// }
// else if(string[0]!=string[string.length-1]){
//     console.log("not same")
// }



// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 12) Write a program that reads a two digit number N . The N consists of only two digits. Check if
// the sum of the digits of N is greater than 7.
// Explanation:
// For example, if the given two digit number N is 45
// The digits in N (45) are 4 and 5.
// Sum of digits of 45 is 9. ( 4+5 = 9 )
// The output should be True as the sum of digits 9 is greater than 7

// let A=prompt('Enter the Number only Two digit number');
//  console.log(A);


// if((A>9)&(A<100)){
//     A=A.toString();
    
//     let a=parseInt(A[0]);
//     let b=parseInt(A[1]);
//     let SumOfdgt=a+b;
    
//     if(SumOfdgt>7){
//         console.log("sum greter than 7", SumOfdgt,true);
//     }
//     else{
//         console.log("sum less than 7", SumOfdgt,false);
//     }
//   }

// else{
//     console.log("Wrong input");
// }


// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// 13) Write a program to check if the given string is a valid password or not. A string is considered
// as a valid password if the number of characters present is greater than 7.
// Explanation:
// For example, if the given input is "passwd", it has only 6 characters (less than 7. So the
// output should be False.


// let Pass=prompt("Enter Password");
// if(Pass.length>=7){
//     console.log("good String");
// }
// else{
//     console.log("Not A Good String");
// }


// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------

// 14) Write a program that reads two words A and B and checks if the second word B is the last
// part of the first word A .
// Explanation:
// For example, if the given words are A = Blackhole and B = hole , The output should be True
// as hole is the last part of the word Blackhole.

// let  A=prompt("enter the value Of A");
// let  B=prompt("enter the value Of B");

// let Blen=B.length;
// console.log("Blen",Blen);
// let lastchacter=A.slice(A.length-Blen);
// console.log(lastchacter);

// if(lastchacter===B)
// {
//     console.log("lastchacter Of A=",lastchacter,"","B=",B,true);
// }
// else{
//     console.log("lastchacter of A=",lastchacter,"","B=",B,false);
// }




//----------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------




// 15) Write a program that reads two words A , B , and an index I . Check if B starts at index I in A .
// Explanation:
// For example, if the given words are A = Repeat , B = pea , and the index is I 2 ,
// • The word Pea is a part of the word Repeat.
// • The word Pea starts at the 2nd index of the word Repeat.
// The output should be True as the string pea starts from the index 2 of the string Repeat.

// let A=prompt("Enter A Word A");
// let  B=prompt("Enter A Word B");
// let I=parseInt(prompt("Enter Index I "));
// let wAtIdxIatA=A.slice(I,I+B.length);
// console.log(A.slice(I,I+B.length));

// if(wAtIdxIatA===B){
//     console.log("wAtIdxIatA",wAtIdxIatA,"   ","B",B,"  ",true)
// }
// else{
//     console.log(false);
// }













//----------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------

// 16) Write a program to check if the first three characters in the two given strings are the same.
// Explanation:
// When the given words are "Apple" and "Application", first three characters in both the
// strings are the same ("App")
// When the given words are "Android" and "Application", the first three characters in both the
// strings are different ("And" != "App")


// let A=prompt("Enter A Word A");
// let  B=prompt("Enter A Word B");
// if(A.slice(0,3)===B.slice(0,3)){

//     console.log(true)
// }
// else{
//     console.log(false);
// }



//----------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------

// 17) Write a program that reads two strings S1 and S2 , and checks if S2 is the first part of S1 .
// Note: No.of characters in the first part of S1 is equal to the number of characters in S2 .
// Explanation:
// For example, if the given strings are S1 = rainbow and S2 = rain ,
// The first part of S1 is rain.
// The characters in S2 are rain.
// The first part of S1 and the characters of S2 are the same.
// The output should be True as the S2 rain is the first part of the S1 rainbow.

// let s1=prompt("Enter string s1");
// let s2=prompt("Enter string s2");
// if(s1.slice(0,s2.length)===s2){
//     console.log(true);
// }
// else{
//     console.log(false);
// }

//==============================================================================================================
//==============================================================================================================
// 18) Write a program that reads the selling price S and buying price B of a product and checks if S
// is greater than B .
// Explanation:
// For example, if the given selling price S 600 and the buying price B 500 ,
// The S is greater than B . (600 is greater than 500).
// The output should be True as the selling price is greater than the buying price.


// let S=parseInt(prompt("Enter Selling Price"));
// let B=parseInt(prompt("Enter Buying Price"));
// console.log("Selling price=",S);
// console.log("Buying price=",B);

// if(S>B){
//     console.log("True as the selling price is greater than the buying price");
// }
// else{
//     console.log(false)
// }

//======================================================================================================================
//======================================================================================================================

// 19) Write a program that reads a string and a number N and checks if the first N characters of
// the string and the last N characters of the string are, not the same.
// Explanation:
// For example, if the given string is toronto and the number N 2 ,
// The first 2 characters of toronto are to.
// The last 2 characters of toronto are to.
// The first 2 characters (to) and the last 2 characters (to) are the same.
// The output should be False as the first 2 characters and the last 2 characters are the same.


// let string=prompt("enter  string to check it start with same charecter and end with saame charecter or not ");
// console.log(string);
// let N=parseInt(prompt("enter Number "));
// if(string.slice(string.length-N)===string.slice(0,N)){
//     console.log("False as the first  ",N,"  characters and the last ",N," characters are the same.");
// }
// else{
//     console.log(false);
// }

//=======================================================================================================
//======================================================================================================================

// 20) Write a program that reads two numbers A and B and checks, If A is less than or equal to B .
// If B is less than or equal to A . Print the result as shown in the sample output.
// Explanation:
// For example, if the given numbers are A = 5 and B = 3 ,
// ✖A is less than or equal to B . (5 is not less than or equal to 3)
// ✔B is less than or equal to A . (3 is less than or equal to 5)
// The output should be
// A <= B is False
// B <= A is True

// let A=prompt("enter number A ");
// let B=prompt("enter  number B");
// A=parseInt(A);
// B=parseInt(B);
// console.log(A);
// console.log(B);

// if(A<=B){
//     console.log("A<=B",true);
// }
// else if(B<=A){
//     console.log("B<=A",true);
// }
// else{
//     console.log("wrong input");
// }


//=======================================================================================================
//======================================================================================================================

//----------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------


// 21) Write a program to check if the last three characters in the two given strings are the same.
// Explanation:
// Given strings are “apple” , “pimple” . In both the strings, the last three characters “ple” are
// common. So the output should be True .


// let str1=prompt("Enter the string 1");
// console.log("str1",str1);
// let lenOfstr1=str1.length;


// let str2=prompt("Enter the string 2");
// let lenOfstr2=str2.length;
// console.log("str2",str2);



// if(    (str1[lenOfstr1-1]==str2[lenOfstr2-1]) && 
//        (str1[lenOfstr1-2]==str2[lenOfstr2-2]) && 
//        (str1[lenOfstr1-3]==str2[lenOfstr2-3])   )
//     {
//         console.log("last three char of str1 =",str1[lenOfstr1-1],str1[lenOfstr1-2],str1[lenOfstr1-3]);
//         console.log("last three char of str2 =",str2[lenOfstr2-1],str2[lenOfstr2-2],str2[lenOfstr2-3]);
//       console.log(true)
// }
// else{
//     console.log("wrong input or",false);
// }
