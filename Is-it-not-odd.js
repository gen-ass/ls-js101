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

// Write a function that takes one integer argument, which may be positive, negative, or zero. This method returns true if the number's absolute value is odd. You may assume that the argument is a valid integer value.

/*Process
Input: 
	a:- Integer can be negative, positive or zero
Output: 
	a: - Boolean

Explicit Rules
1. The numbers are integers that can be -, 0, or +. 
2. These integers can be odd or even numbers, so -1 is odd and 1 is odd, but 2 is not odd
3. We can assume all integer values are valid

Clarifying questions:
1. What if the value is not an integer? We are stating it is an valid integer.
2. What would be an invalid integer? Because we are only passing valid integers we are not considering floating points, strings, Out of bounds, NaN, boolean, object or array ets

Mental Model
Given that an argument is passed as an integer to a function
And the integer is an even number the return is false
When the integers is an odd number the return is true
Then the message in the console returned will display true or false

Example/Test Cases
1.
	Inputs
		Integer: 2
	Output
		false
2
	Inputs
		Integer: -7
	Outputs:
		false
3 
	Inputs
		Integer:-4
	Outputs
		true

Data/Algorithm 
1.Create a function called isOdd
2.Pass the the arguments that are integers
3.For each number check the integer condition
	1.If the number is even return false
	2.if the number is odd return true
4.Return the number to the console


Test Algorithm

1.
	Inputs
		Integer: 2
	Output
		false

Algorithm
1. Create function isOdd

2. Pass the function argument integer (2) to the function

3. Check true or false condition of integer
	1. Check if the number is even, if not return false
	2. Check if the number is odd, if not return true

4. Return the condition output to the console

Code
*/

function isOdd (number) {
	return number % 2 === 0 ? false : true;
}

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true

// NOTE: The modulus operation (%) in JavaScript works a bit differently with negative numbers compared to some other programming languages. In JavaScript, the sign of the result is the same as the dividend (the number being divided).
