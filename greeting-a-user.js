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

Write a program that will ask for user's name. The program will then greet the user. If the user writes "name!" then the computer yells back to the user.

Process
Input
	- string
Output
	- string

Explicit Rules
1. The user types their name in the console
2. Checks if the user has typed a name with or without an exclamation mark
3. If no exclamation mark exists then print the users's name if it does contain an exclamation mark then SHOUT to the user
4. The response is outputted to the console

Clarifying questions
1. Do we need to search for the ! exclamation mark in the string? No, it is only at the end of the user's input. Note: Only on the SHOUTING output should the  
   ! exclamation mark be removed.
2. If the string is empty will we have a default output? No, the input the user provides is returned.
3. Is the input values always a string? Yes.


Mental Model
Given that the user inputs a string on the command line
And if the user adds input without an exclamation mark (!) the output given is Hello "name"
Then when the user adds input with an exclamation mark (!) the output given is HELLO "NAME!". WHY ARE WE SCREAMING?
In both cases the output is printed to teh console


Example Test Cases:
Input
	- String What is your name? Bob
Output
	- String  Hello Bob.

Data/Algorithm
1. Allow users to input a string on the command line for their name.
2. Check the string for an exclamation mark (!) 
3. Use the input from the user to determine the appropriate response.
4. Return the output to the console after the condition has been satisfied

Test Algorithm
Test 1
Input
	- String What is your name? Bob
Output
	- String  Hello Bob.

Test 2
Input
	- String What is your name? Bob!
Output
	- String  HELLO BOB. WHY ARE WE SCREAMING?

0. Import the readline-sync library

1. Provide the user a variable called name to capture the input

2. Pass the name variable into the function call greetingUser 

3. The function greetingUser will call the argument from the function caller greetingUser (invocation) as a parameter called, name

4. If the name parameter does not contain the exclamation mark (!) the if condition will run, Hello Bob. without the exclamation mark

5. If the name parameter contains an exclamation mark (!) then the if condition will run, HELLO "NAME". WHY ARE WE SCREAMING? and with the toUpperCase() method convert the string to uppercase and then with the replace() method using a regex replace the the exclamation mark with nothing.

6. The output is logged to the console depending on the if condition outcome

Code
*/

//NR 1
let rlSync = require("readline-sync");

let name = rlSync.question("What is your name? ");

function greetingUser(name) {
  if (!name.includes("!")) {
    console.log(`Hello ${name}.`);
  } else {
    console.log(
      `HELLO ${name.toUpperCase().replace(/!/g, "")}. WHY ARE WE SCREAMING?`
    );
  }
}

greetingUser(name);

// NR 2
// console.log(name[name.length - 1] === "!" 
//   ? `HELLO ${name.slice(0, -1).toUpperCase()}. WHY ARE YOU SCREAMING?` 
//   : `Hello ${name}.`);

	