/* PEDAC only focussing on the D section

Test Algorithm

Test 1
	Inputs
		Integer: 5
		String: s
	Output
		Integer: 15

Test 2
	Inputs
		Integer: 6
		String: p
	Output
		Integer: 720


Algorithm
1. Create a variable integerange to store the user input

2. Create another variable productsum that will store the product or sum option

3. Create a for loop that will process the integer value 
	1. Add a If condition in the loop that checks for product or sum calculation
	2. If the product is === "p" then calculate the product.
	3. Else sum === "s" calculate the sum

4. Console log the product or the sum output to the console

// Write a program that asks the user to enter an integer greater than 0, then asks whether the user wants to determine the sum or the product of all numbers between 1 and the entered integer, inclusive.

Code
*/

let rlSync = require('readline-sync');

let integeRange = parseInt(rlSync.question('Please enter an integer greater than 0:\n'));
let productSum = rlSync.question('Enter "s" to compute the sum, or "p" to compute the product.\n').toLowerCase();
let sum = 0;
let product = 1;

for (let i = 1; i <= integeRange; i += 1) {
	if (productSum === "s") {
		sum += i;
	} else {
		product *= i;
	}
}

if (productSum === "s") {
	console.log(`The sum of the integers between 1 and ${integeRange}, ${sum}`);
} else {
	console.log(`The product of the integers between 1 and ${integeRange}, ${product}`);
}