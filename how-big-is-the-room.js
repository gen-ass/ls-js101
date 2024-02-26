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
4. The returned values neet to

Clarifying questions
1. Will the values be real numbers or floats or both? Yes, it will be both
2. Do we need validation that we are using a number of float? No, not required now


Mental Model



*/
let rlSync = require("readline-sync");
// Nr 1
const SQMETERS_TO_SQFEET = 10.7639;

let meterOrFeet = rlSync.question(
  "Do you want measurements in square meter or square feet? Type m for Square meter or f for Square feet."
);
if (["M", "m", "F", "f"].includes(meterOrFeet)) {
  meterOrFeet.toLocaleLowerCase();
}
let length = rlSync.questionInt("Enter the length of the room in meters:\n");
let width = rlSync.questionInt("Enter the width of the room in meters:\n");
console.log(meterOrFeet);

function measureRoom(length, width, meterOrFeet) {
	let squares = length * width;
	let squareFeet = squares * SQMETERS_TO_SQFEET;
  if (meterOrFeet === "m") {
    console.log(
      `The area of the room is ${squares.toFixed()} square meters (${squareFeet.toFixed(2)} square feet).`
    );
  } else {
  console.log(
    `The area of the room is ${squareFeet.toFixed(2)} square feet (${squares.toFixed(2)} square meters).`
  );
	}
}


// // Nr 2
// // Ask for the measurement unit
// let meterOrFeet = rlSync.question("Do you want measurements in square meters or square feet? Type 'm' for Square meters or 'f' for Square feet: ").toLowerCase();

// // Validate the input
// if (!['m', 'f'].includes(meterOrFeet)) {
//   console.log("Invalid input. Please restart the program and enter 'm' for meters or 'f' for feet.");
//   process.exit();
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
measureRoom(length, width, meterOrFeet);

