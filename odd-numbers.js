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

*/
// Log all odd numbers from 1 to 99, inclusive, to the console, with each number on a separate line.

/* 
Process
Input
 a: Log numbers 1 - 99 inclusive
Output
 a: Odd numbers

 Print each odd number to the console on a new line and also include 99 in the output
 Example: 
 Al numbers divide by itself with will have a value leftover
 1 % 2
 3
 5
 7
 including
 99

 Explicit rules
 1. The numbers are first divided by two to determine if 0 is leftover, if so then it is even do not print
 2. We end at 99 but we include 99 as well as 1 as it is odd numbers and stated inclusive, Upper and Lower Bounds
 3. We decide that all numbers are natural numbers, we will not include floats, NaN, strings or non-natural numbers

 Clarifying questions
 1. Do we include the following?:Yes, Lowest odd number is 1 and the lowest even number is 2 the highest odd number is 99 and the highest even number is 98

 Mental Model:
 When a list of natural numbers processes from 1 through 99, inclusive 
 Then check each number if it is odd or even. 
 And when Even numbers are found do not return to the console
 Then return the odd numbers to a list for output to the console per new line.

Examples / Test cases

Test 1
Input
	Log number: 1 - 99
Output
	1
	3
	5
	7
	9
	etc....

Data structure
 - List of of odd numbers output to an array
 - Create an empty array

 Test: 1
 Input
	Log number: 1 - 99
Output
	1
	3
	5
	7
	9
	etc....
 Algorithm
1. Create empty array isOdd
	isOdd =[]
2. Process the naturalNumbers array
	naturalNumbers = [1,...99]
3.Check condition in the naturalNumbers array
		1. If the number in naturalArray divides by 2 cleanly, then number in naturalNumbers is even return false otherwise true
		naturalNumbers = [1] % 2 = 0.5	(Odd)		Add
		naturalNumbers = [2] % 2 = 1		(Even)	Ignore
		naturalNumbers = [3] % 2 = 1.5	(Odd)		Add
		naturalNumbers = [4] % 2 = 2		(Even)	Ignore
		naturalNumbers = [5] % 2 = 2.5	(Odd)		Add
		etc.
	1.Push values that are odd to the isOdd array.
	isOdd =[1,3,5...etc]

4. Return the values from the naturalArray to the console on a new line.
 
console.log(1)
console.log(3)
console.log(5)
etc.

Code
*/

let naturalNumbers = [...Array(100)].map((_, i) => i + 1);

	// function printOddNumbers(numbers) {
	// 	for (let i = 0; i < numbers.length; i++) {
	// 		if (numbers[i] % 2 !== 0) {
	// 			console.log(numbers[i]);
	// 		}
	// 	}
	// }

// function printOddNumbers(numbers) {
//   numbers.forEach(number => {
//     if (number % 2 !== 0) {
//       console.log(number);
//     }
//   });
// }

function printOddNumbers(numbers) {
  numbers.filter(number => number % 2 !== 0).forEach(number => console.log(number));
}


printOddNumbers(naturalNumbers);

