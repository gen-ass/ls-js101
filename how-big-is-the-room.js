/* PEDAC: PEDAC stands for “[Understand the] Problem, Examples / Test Cases, Data Structure, Algorithm, and Code.” 
PEDAC has two primary objectives: process the problem (PEDA) and code with intent (C).

Objective           	Step            	        Description
-----------------------------------------------------------
Process the Problem 	Understand the Problem 	  Identify expected input and output
                                                Make the requirements explicit
                                                Identify rules
                                                Mental model of the problem (optional)
------------------------------------------------------------
                     	Examples/Test Case 	      Validate understanding of the problem
	                    Data Structure 	          How we represent data that we will work with when converting the input to output.
	                    Algorithm 	              Steps for converting input to output

Code with Intent 	    Code 	                    Implementation of Algorithm 

Build a program that asks the user to enter the length and width of a room in meters, and then logs the area of the room to the console in both square meters and square feet.

Process
Input
	- length: number
	- width: number
Output
	- square meters
	- square feet

Explicit Rules
1. The input of the user is a number
2. The two numbers are multiplied
3. The returned values are in square meter and square feet
4. The returned values should be returned should be a decimal value upto 2 decimal places

Clarifying questions
1. Will the values be real numbers or floats or both? Yes, it will be both
2. Do we need validation that we are using a number of float? No, not required now


Mental Model
Given that the user inputs two number values in the command line to calculate square feet and square meters 
Then provide the user with input for the length value
And provide user the with input for the  width value
Then multiply the provided numbers with each other
And calculate the square meters and the square feet of the values entered by the user
Then output the square meters and square feet to the console 

Example Test Cases:
Input
	- Integer 10
	- Integer 7
Output
	- String two decimals: 753.47

Data/Algorithm
1. Allow users to input two numbers in the command line
2. Take the two numbers multiply it and save it in a variable
3. Take the output stored in the variable and multiply it with the stored variable for square feet
4. Log both calculations to the console as square meters and square feet.

Test Algorithm
Test 1
Input
	- Integer 10
	- Integer 7
Output
	- String two decimals: 753.47 feet 70.00 square meters

Test 2
Input
	- Integer 4
	- Integer 4
Output
	- String two decimals: 16 meters 172.22 square feet

0. Store the SQUARE_TO_FEET calculation in a const

1. Import readline-sync for command line input

2. Create an Integer input field for the length

3. Create another Integer input field for the width

4. Create a variable to store the squaremeters then multiply the two numbers

5. Create a variable to store the squarefeet then multiply with the SQUARE_TO_FEET

6. Log the output of both squaremeters and squarefeet to the console and only display the output for both to the second decimal place

Code
*/
let rlSync = require("readline-sync");

//Nr 0
const SQMETERS_TO_SQFEET = 10.7639;

let length = rlSync.questionInt("Enter the length of the room in meters:\n");
let width = rlSync.questionInt("Enter the width of the room in meters:\n");

function measureRoom(length, width) {
	let squares = length * width;
	let squareFeet = squares * SQMETERS_TO_SQFEET;
    console.log(
      `The area of the room is ${squares.toFixed()} square meters (${squareFeet.toFixed(2)} square feet).`
    );
}

// // Nr 1
// const SQMETERS_TO_SQFEET = 10.7639;

// let meterOrFeet = rlSync.question(
//   "Do you want measurements in square meter or square feet? Type m for Square meter or f for Square feet."
// );
// if (["M", "m", "F", "f"].includes(meterOrFeet)) {
//   meterOrFeet.toLocaleLowerCase();
// }
// let length = rlSync.questionInt("Enter the length of the room in meters:\n");
// let width = rlSync.questionInt("Enter the width of the room in meters:\n");
// console.log(meterOrFeet);

// function measureRoom(length, width, meterOrFeet) {
// 	let squares = length * width;
// 	let squareFeet = squares * SQMETERS_TO_SQFEET;
//   if (meterOrFeet === "m") {
//     console.log(
//       `The area of the room is ${squares.toFixed()} square meters (${squareFeet.toFixed(2)} square feet).`
//     );
//   } else {
//   console.log(
//     `The area of the room is ${squareFeet.toFixed(2)} square feet (${squares.toFixed(2)} square meters).`
//   );
// 	}
// }


// // Nr 2
// // Ask for the measurement unit
// let meterOrFeet = rlSync.question("Do you want measurements in square meters or square feet? Type 'm' for Square meters or 'f' for Square feet: ").toLowerCase();

// // Validate the input
// if (!['m', 'f'].includes(meterOrFeet)) {
//   console.log("Invalid input. Please restart the program and enter 'm' for meters or 'f' for feet.");
//   process.exit(); // Note: The usage of the Node.js process.exit() would not be ideal as it terminate the process in while the loop is running. It will provide output to see what should be done. Use only when needed
// }

// // Ask for the room dimensions
// let length = rlSync.questionInt("Enter the length of the room in meters:\n");
// let width = rlSync.questionInt("Enter the width of the room in meters:\n");

// // Function to calculate and display the room area
// function measureRoom(length, width, meterOrFeet) {
//   const SQMETERS_TO_SQFEET = 10.7639;
//   let area = length * width;
//   let output;

//   if (meterOrFeet === "m") {
//     output = `The area of the room is ${area.toFixed(2)} square meters.`;
//   } else {
//     let areaInFeet = area * SQMETERS_TO_SQFEET;
//     output = `The area of the room is ${areaInFeet.toFixed(2)} square feet.`;
//   }

//   console.log(output);
// }

// // Call the function with the user's inputs
measureRoom(length, width);

