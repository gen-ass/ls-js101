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

Write a function that computes the sum of all numbers between 1 and some other number, inclusive, that are multiples of 3 or 5. For instance, if the supplied number is 20, the result should be 98 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).

You may assume that the number passed in is an integer greater than 1.

Process
Input
	- integer
Output
	- number

Explicit Rules
1. The input of the user is a number
2. Check the for multiples of three and five
3. The sum of the multiples of three and five are returned

Clarifying questions
1. The number passed it is greater than 0? Yes it is higher than 0
2. What are some edged cases, do we check for floats, or negative numbers? No we do not test for it.


Mental Model
Given that we are calculating the multiples of 3 and 5 the user provides a number
Then the number is checked if it is a multiple of 3 and 5
And if the number is a multiple of 3 and 5 it is added to a counter
Then the counter sums all multiples of three and five together
And return the sum of the multiples to the console

Example Test Cases:
Input
	- Integer 10
Output
	- Sum 33

Data/Algorithm
1. The user provide a number 
2. Multiples for both 3 anf 5 are iterated through to determine if multiples exist
3. Any multiples found when no rest value is returned to be summed
4. After the iteration is complete the sum is returned to the console

Test Algorithm
Test 1
Input
	- Integer 3
Output
	- Sum 3

Test 2
Input
	- Integer 1000
Output
	- Sum 234168

0. Provide the input argument from the sumMultiplesOfThreeAndFive function call

1. Pass the argument to the number parameter

2. Define the sum variable as 0 to store the sum of the multiples

3. iterate through the provided number starting at 1

4. Check if the number is multiples of 3 and 5, it should return 0 when divided to be a variable

5. Add the divisor of a found multiple of 3 and 5 to the the sum variable using addition

6. Return the sum to the console

Code
*/

// Nr 1
function sumMultiplesOfThreeAndFive(number) {
  let sum = 0;
	
  for (let i = 1; i <= number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}

console.log(sumMultiplesOfThreeAndFive(3));       // 3
console.log(sumMultiplesOfThreeAndFive(5));       // 8
console.log(sumMultiplesOfThreeAndFive(10));      // 33
console.log(sumMultiplesOfThreeAndFive(20));      // 98
console.log(sumMultiplesOfThreeAndFive(1000));    // 234168

// Nr 2
// Helper function for readability

// function isValidEmail(email) {
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   return emailRegex.test(email);
// }

// function filterValidEmails(emailList) {
//   return emailList.filter(isValidEmail);
// }

// const emails = ['test@example.com', 'invalid_email', 'test@.com', 'test@domain.'];
// const validEmails = filterValidEmails(emails);
// console.log(validEmails); // Outputs: ['test@example.com']