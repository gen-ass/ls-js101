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

The British Empire adopted the Gregorian Calendar in 1752, which was a leap year. Prior to 1752, they used the Julian Calendar. Under the Julian Calendar, leap years occur in any year that is evenly divisible by 4.

Using this information, update the function from the previous exercise to determine leap years both before and after 1752

Process
Input
	- year: number
Output
	- boolean

Explicit Rules
1. The input provided is a year number
2. Any number input provided should be verified if it is a leap year
3. The conditions for a leap year should be, check for dates before the 1752 that is divisible by 4, check for dates after 1752 that is divisible by 4, not divisible by 100, divisible by 400
4. Final output should be a true or false value

Clarifying questions
1. What are all the requirements to get a true value for a leap year? It is as follows, less than 1752 number/4 = true, greater than 1752 and number/4 = true, number/100 = false, number/400 = true 
2. Is it valid for years less than 0? Only valid for years greater than 0


Mental Model
Given that the user inputs a year date
Then the input is calculated to determine if the number is a leap year
And if the the year is a leap year the output is true 

Example Test Cases:
Input
	- Number: 10
Output
	- false

Data/Algorithm
1. Provide the year component as the input 
2. Take the number check if it is less than 1752 then divide by 4, then check if number is greater than 1752 then divide it by 4 check if it cleanly divides, then divide it by 100 and check if it has a  rest value, lastly check if it cleanly divides by 400, then it is a leap year
3. Log to the console the if it is true or false

Test Algorithm
Test 1
Input
	- Number 2016
Output
	- true

Test 2
Input
	- Number 2015
Output
	- false

Test 3
Input
	- Number 1
Output
	- false

Test 4
Input
	- Number 2100
Output
	- false

Test 4
Input
	- Number 1900
Output
	- false

0. Provide a date year argument to the function call

1. In the the function definition provide the argument to the parameter date

2. Take the date parameter and check if it satisfies the condition for being a leap year

3. Check if date is less than 1752 then using AND && operand, if the date by four and check if it cleanly divides, if falsy do not check the second operand if it divides cleanly by 4, if truthy then evaluate the second operand,
4. AND && Divide the date by four and check if it cleanly divides, if falsy do not check the second operand if it divides cleanly by 100, if truthy then evaluate the second operand, 
   OR || if the lef side of OR is truthy then do not check the second operand on the right side of OR, if the left side of OR is falsy then check 
the second operand if it cleanly divides by 400 
5. Return the output to the console

Code
*/

function isLeapYear(date) {
	// Check for leap year rules before 1752 (Julian calendar)
	if (date < 1752 && date % 4 === 0) {
			console.log(date + ' true');
	}
	// Check for leap year rules from 1752 (Gregorian calendar)
	else if ((date % 4 === 0 && date % 100 !== 0) || date % 400 === 0) {
			console.log(date + ' true');
	} else {
			console.log(date + ' false');
	}
}


isLeapYear(2016);      // true
isLeapYear(2015);      // false
isLeapYear(2100);      // false
isLeapYear(2400);      // true
isLeapYear(240000);    // true
isLeapYear(240001);    // false
isLeapYear(2000);      // true
isLeapYear(1900);      // false
isLeapYear(1752);      // true
isLeapYear(1700);      // true
isLeapYear(1);         // false
isLeapYear(100);       // true
isLeapYear(400);       // true