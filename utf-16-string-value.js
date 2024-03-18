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

Write a function that determines and returns the UTF-16 string value of a string passed in as an argument. The UTF-16 string value is the sum of the UTF-16 values of every character in the string. (You may use String.prototype.charCodeAt() to determine the UTF-16 value of a character.)

Process
Input
	- string
Output
	- sum

Explicit Rules
1. The input of the user is a string
2. Determine the UTF-16 string value
3. Add up the UTF-16 character values of the string
4. The value returned is the sum of all the characters in the string

Clarifying questions
1. Is it only string values? Yes
2. Do we need to consider non-ASCII characters? Yes, a check need to made to determine and count this as well


Mental Model
Given that the user provides a string
Then the UTF-16 of all positions in the strings needs to be determined
And the UTF-16 values of all the characters in the string needs to be added up
Then the sum is returned to the console

Example Test Cases:
Input
	- String 'Four score'
Output
	- Sum 984

Data/Algorithm
1. The user provide a string 
2. Each character in the string has a value, this value must be determined
3. All values in the string is iterated through and added to a sum
4. This sum is returned to the console

Test Algorithm
Test 1
Input
	- String 'Launch School'
Output
	- Sum 1251

Test 2
Input
	- String "\u03a9"
Output
	- Sum 973

0. Input is provided to the utf16StringSum function call as a argument

1. This argument is passed to the utf16StringSum function definition parameter stringsum

2. Then define a variable sum to store the sum values

3. Iterate through the provided stringsum starting at 0

4. Determine the stringsum value using String.prototype.charCodeAt() for each character of the string

5. Add the value of each character to the sum variable

6. Return the sum to the console

Code
*/

function utf16StringSum(inputString) {
	let sum = 0;

	for (let stringValue in inputString) {
		sum += inputString.charCodeAt([stringValue]);
	}

	return sum;
}


console.log(utf16StringSum('Four score'));         // 984
console.log(utf16StringSum('Launch School'));      // 1251
console.log(utf16StringSum('a'));                  // 97
console.log(utf16StringSum(''));                   // 0
// console.log(utf16StringSum(null));                   // 0


// The next three lines demonstrate that the code
// works with non-ASCII characters from the UTF-16
// character set.
const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
console.log(utf16StringSum(OMEGA));                  // 937
console.log(utf16StringSum(OMEGA + OMEGA + OMEGA));  // 2811

// This will output 97000000, which is the sum of the UTF-16 code unit values of the characters in the string. 
// The UTF-16 code unit value of the character 'a' is 97, so the sum for a string of one million 'a' characters is 97 * 1000000 = 97000000.
// let longString = 'a'.repeat(1000000);
// console.log(utf16StringSum(longString));  // 97000000

// The character '𝌆' (U+1D306 TETRAGRAM FOR CENTRE) is outside the BMP and is represented as a surrogate pair in JavaScript.
let TETRAGRAM = '𝌆';
console.log(utf16StringSum(TETRAGRAM));  // 111410

// Test case with special characters
let specialCharsString = ' \t\n!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
console.log(utf16StringSum(specialCharsString));  // Outputs: 2137