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

Create a function that takes 2 arguments, an array and an object. The array will contain 2 or more elements that, when combined with adjoining spaces, will produce a person's name. The object will contain two keys, "title" and "occupation", and the appropriate values. Your function should return a greeting that uses the person's full name, and mentions the person's title.

Process
Input
	- Array and Object
Output
	- string

Explicit Rules
1. The input is one array and one object
2. The array has two or more elements
3. The object has two keys
4. A person's name is produced from the array
5. The object with two keys will create a title for the person

Clarifying questions
1. Will we encounter a sparse array?: No, the array and object does not have missing properties
2. Does non-unique keys exist? Do I need to handle them: The keys are unique and you need not to cater for non-unique keys


Mental Model
Given that the function receives an input with an array and an object
Then the input is parsed as an array and an object
And the output is combined into one console.log output string

Example Test Cases:
Input
	- Array and Object ["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" }
Output
	- String Hello, John Q Doe! Nice to have a Master Plumber around.

Data/Algorithm
1. An array and object is provided as input
2. The array is parsed to get the user's names and stored in a variable
3. The object is parsed to get the title of the user and is stored in the variable
4. Output of both variables is concatenated and written to the console

Test Algorithm
Test 1
Input
	- Array and Object ["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" }
Output
	- String Hello, John Q Doe! Nice to have a Master Plumber around.

Test 2
Input
	- Array and Object ["Mark", " ", "Space"], { title: "Master", occupation: "Astronaut" }
Output
	- String Hello, Mark Space! Nice to have a Master Astronaut around.

0. Input is provided to the greetings function call as an argument

1. This argument is passed to the greetings function definition parameter nameArray and occupationObj

2. Then define a variable fullName to store the nameArray string. The values returned from the array is joined using the .join() method with the space (' ') between the names

3. Another variable is created fullTitle to store the object values being returned from the object title and occupation. Using a template literal the occupationObj values are returned the space (' ') in the literal string concatenates the two values 

4. The function is returned with the two variables fullName and fullTitle and concatenated using a template literal. 

5. After the function greetings is defined, the greetings call is made with the arguments

6. Return greetings to the console

Code
*/


function greetings(nameArray, occupationObj) {
	let fullName = nameArray.join(' ');
	let fullTitle = `${occupationObj.title} ${occupationObj.occupation}`;

	return `Hello, ${fullName}! Nice to have a ${fullTitle} around.`;
}

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);

// logs Hello, John Q Doe! Nice to have a Master Plumber around.
