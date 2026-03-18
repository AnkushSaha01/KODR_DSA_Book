// //1.Sum of two integers
// let a = 10;
// let b = 20;
// console.log(a + b);

// //2.Print the message along with values and sum (Ex - The sum of 45 & 12 = 57)
// let c = 45;
// let d = 12;
// console.log("The sum of " + c + " & " + d + " = " + (c + d));

// //3.Accept two integers from user and print the sum (Ex - The sum of 45 & 12 = 57)
// let e = Number(prompt("Enter the first integer"));
// let f = Number(prompt("Enter the second integer"));
// console.log("The sum of " + e + " & " + f + " = " + (e + f));

// //4.Accept the User's name, age and print in following manner (Ex - Hello Shery, you are 12 years old.)
// let name = prompt("Enter your name");
// let age = Number(prompt("Enter your age"));
// console.log("Hello " + name + ", you are " + age + " years old.");

// //5.Solve Increment & decrement operator questions

// //6.Accept two numbers from user and swap their values (Part 2 - Swap without using third variable)
// let g = Number(prompt("Enter the first number"));
// let h = Number(prompt("Enter the second number"));
// console.log("The first value is " + g);
// console.log("The second value is " + h);
// let temp = g;
// g = h;
// h = temp;

// console.log("first value after swap is " + g);
// console.log("second value after swap is " + h);


// //part 2
// let num1 = Number(prompt("Enter the first number"));
// let num2 = Number(prompt("Enter the second number"));
// console.log("The first value is " + num1);
// console.log("The second value is " + num2);
// num1 = num1 + num2;
// num2 = num1 - num2;
// num1 = num1 - num2;
// console.log("The first value after swap is " + num1);
// console.log("The second value after swap is " + num2);


// //6.Accept the length and width of a rectangle. Calculate & print the area and perimeter.
// let length = Number(prompt("Enter the length of the rectangle"));
// let width = Number(prompt("Enter the width of the rectangle"));
// console.log("The perimeter of the rectangle is " + (2 * (length + width)));


// //7.Accept the parameters and calculate the Compound Interest & print it on STDOUT (Use Math class methods)
// let principal = Number(prompt("Enter the principal amount"));
// let rate = Number(prompt("Enter the rate of interest"));
// let time = Number(prompt("Enter the time in years"));
// console.log("The compound interest is " + (Math.floor((principal * (1 + rate / 100) ** time )- principal)));


// //8.Accept the three sides of triangle and calculate the area using Heron's formula
// let side1 = Number(prompt("Enter the first side"));
// let side2 = Number(prompt("Enter the second side"));
// let side3 = Number(prompt("Enter the third side"));
// let s = (side1 + side2 + side3) / 2;
// console.log("The area of the triangle is " + Math.sqrt(s * (s - side1) * (s - side2) * (s - side3)));


// //9.Find surface area of sphere
// let radius = Number(prompt("Enter the radius of the sphere"));
// console.log("The surface area of the sphere is " + Math.floor(4 * Math.PI * (radius ** 2)));


// //10.Find circumference and area of circle
// let radius = Number(prompt("Enter the radius of the circle"));
// console.log("The circumference of the circle is " + Math.floor(2 * Math.PI * radius));
// console.log("The area of the circle is " + Math.floor(Math.PI * (radius ** 2)));


// //11.Accept two numbers and print the greatest between them
// let num1 = Number(prompt("Enter the first number"));
// let num2 = Number(prompt("Enter the second number"));
// if (num1 > num2) {
//   console.log("The greatest number is " + num1);
// } else {
//   console.log("The greatest number is " + num2);
// }


// //12.Accept the gender from the user as char and print the respective greeting message (Ex - Good Morning Sir (on the basis of gender))
// let gender = prompt("Enter your gender (M/F)");
// if (gender === "M") {
//   console.log("Good Morning Sir");
// } else if (gender === "F") {
//   console.log("Good Morning Ma'am");
// } else {
//   console.log("Invalid gender");
// }


// //13.Extend the previous program and handle the wrong inputs. Print Good Morning Sir for input m or M & Good morning Ma'am for input F or f, else print Wrong Input.
// let gender = prompt("Enter your gender (M/F)");
// let genderLow = gender.toLowerCase();
// if (genderLow === "m") {
//   console.log("Good Morning Sir");
// } else if (genderLow === "f") {
//   console.log("Good Morning Ma'am");
// } else {
//   console.log("Wrong Input");
// }


// //14.Accept an integer and check whether it is an even number or odd.
// let num = Number(prompt("Enter an integer"));
// if (num % 2 === 0) {
//   console.log("The number is even");
// } else {
//   console.log("The number is odd");
// }


// //15.Accept name and age from the user. Check if the user is a valid voter or not. (Valid - Hello Shery, You are a valid voter. Invalid - Sorry Shery, you can't cast the vote. Part 2 - Print after how many years the user will be eligible)
// let name = prompt("Enter your name");
// let age = Number(prompt("Enter your age"));
// if (age >= 18) {
//   console.log("Hello " + name + ", You are a valid voter.");
// } else {
//   console.log("Sorry " + name + ", you can't cast the vote.");
// }

// //part 2
// if(age<18){
//   console.log("You will be eligible to vote after " + (18 - age) + " years.");
// }


// //16.Accept a day number between 1-7 and print the corresponding day name.
// let day = Number(prompt("Enter a day number between 1-7"));
// switch (day) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("Saturday");
//     break;
//   case 7:
//     console.log("Sunday");
//     break;
//   default:
//     console.log("Invalid day number");
// }


// //17.Accept three numbers and print the greatest among them
// let num1 = Number(prompt("Enter the first number"));
// let num2 = Number(prompt("Enter the second number"));
// let num3 = Number(prompt("Enter the third number"));
// if (num1 > num2 && num1 > num3) {
//   console.log("The greatest number is " + num1);
// } else if (num2 > num1 && num2 > num3) {
//   console.log("The greatest number is " + num2);
// } else {
//   console.log("The greatest number is " + num3);
// }


// //18.Accept a year and check if it a leap year or not (google to find out what's a leap year)
// let year = Number(prompt("Enter a year"));
// if (year % 4 === 0) {
//   if(year % 100 ===0 ){
//     console.log("The year is not a leap year")
//   }else if(year % 400 ===0){
//     console.log("The year is a leap year")
//   }
// } else {
//   console.log("The year is not a leap year");
// }


// //19.Accept an English alphabet from user and check if it is a consonant or a vowel.
// let alphabet = prompt("Enter an English alphabet");
// if (alphabet === "a" || alphabet === "e" || alphabet === "i" || alphabet === "o" || alphabet === "u") {
//   console.log("The alphabet is a vowel");
// } else {
//   console.log("The alphabet is a consonant");
// }


// //20.Accept an integer and Print "Hello World" n times
// let n = Number(prompt("Enter an integer"));
// for (let i = 0; i < n; i++) {
//   console.log("Hello World");
// }


// //21.Print natural number up to n.
// let n = Number(prompt("Enter a number"));
// for (let i = 1; i <= n; i++) {
//   console.log(i);
// }


// //22.Reverse for loop. Print n to 1.
// let n = Number(prompt("Enter a number"));
// for (let i = n; i >= 1; i--) {
//   console.log(i);
// }


// //23.Take a number as input and print its table (Ex: 5 * 1 = 5 ... up to 10 terms)
// let n = Number(prompt("Enter a number"));
// for (let i = 1; i <= 10; i++) {
//   console.log(n + " x " + i + " = " + (n * i));
// }


// //24.Sum up to n terms.
// let n = Number(prompt("Enter a number"));
// let sum = 0;
// for (let i = 1; i <= n; i++) {
//   sum += i;
// }
// console.log("The sum of first " + n + " natural numbers is " + sum);


// //25.Factorial of a number
// let n = Number(prompt("Enter a number"));
// let fact = 1;
// for (let i = n; i >= 1; i--) {
//   fact *= i;
// }
// console.log("The factorial of " + n + " is " + fact);


// //26.Print the sum of all even & odd numbers in a range separately.
// let n = Number(prompt("Enter a number(range form 1)"));
// let evenSum = 0;
// let oddSum = 0;
// for (let i = 1; i <= n; i++) {
//   if (i % 2 === 0) {
//     evenSum += i;
//   } else {
//     oddSum += i;
//   }
// }
// console.log("The sum of even numbers is " + evenSum);
// console.log("The sum of odd numbers is " + oddSum);


// //27.Print all the factors of a number.
// let n = Number(prompt("Enter a number"));
// for (let i = 1; i <= n; i++) {
//   if (n % i === 0) {
//     console.log(i);
//   }
// }


// //28.Print the sum of all factors of a number (Ex: 50 -> 1 + 2 + 5 + 10 + 25 = 43)
// let n = Number(prompt("Enter a number"));
// let sum = 0;
// for (let i = 1; i <= n; i++) {
//   if (n % i === 0) {
//     sum += i;
//   }
// }
// console.log("The sum of all factors of " + n + " is " + sum);


// //29.Check if a number is a prime number or not.
// let n = Number(prompt("Enter a number"));
// let isPrime = true;
// for (let i = 2; i < n; i++) {
//   if (n % i === 0) {
//     isPrime = false;
//     break;
//   }
// }
// if (isPrime) {
//   console.log("The number is a prime number");
// } else {
//   console.log("The number is not a prime number");
// }


// //30.Write a program to take two inputs a, b & find the value of a raised to the power of b. (Ex - a = 2, b = 5, OP - 2^5 = 32)
// let a = Number(prompt("Enter the base"));
// let b = Number(prompt("Enter the exponent"));
// let result = 1;
// for (let i = 1; i <= b; i++) {
//   result *= a;
// }
// console.log("The value of " + a + " raised to the power of " + b + " is " + result);


// //31.Separate each digit of a number and print it on a new line (Ex - 123 -> OP: 3, 2, 1)
// let n = Number(prompt("Enter a number"));
// while (n > 0) {
//   let digit = n % 10;
//   console.log(digit);
//   n = Math.floor(n / 10);
// }


// //32.Sum of digits of a number (Ex: 936 = 18)
// let n = Number(prompt("Enter a number"));
// let sum = 0;
// while (n > 0) {
//   let digit = n % 10;
//   sum += digit;
//   n = Math.floor(n / 10);
// }
// console.log("The sum of digits of " + n + " is " + sum);


// //33.Accept a number and print its reverse (Ex - 123 -> 321)
// let n = Number(prompt("Enter a number"));
// let reverse = 0;
// while (n > 0) {
//   let digit = n % 10;
//   reverse = reverse * 10 + digit;
// }
// console.log("The reverse of " + n + " is " + reverse);


// //34.Accept a number and check if it is a palindromic number (If number and its reverse are equal, Ex: 12321 - Reverse - 12321)
// let n = Number(prompt("Enter a number"));
// let reverse = 0;
// while (n > 0) {
//   let digit = n % 10;
//   reverse = reverse * 10 + digit;
// }
// if (n === reverse) {
//   console.log("The number is a palindromic number");
// } else {
//   console.log("The number is not a palindromic number");
// }


// //35.Accept a number and check if it is a strong number or not (Sum of factorial of each digit, Ex: 145 = 1! + 4! + 5! = 145)
// let n = Number(prompt("Enter a number"));
// let sum = 0;

// function fact(digit){
//   let fact = 1;
//   for(let i = 1; i <= digit; i++){
//     fact *= i;
//   }
//   return fact;
// }

// while(n>0){
//   let digit = n%10;
//   sum += fact(digit);
// }
// if(sum === n){
//   console.log("The number is a strong number");
// }else{
//   console.log("The number is not a strong number");
// }
