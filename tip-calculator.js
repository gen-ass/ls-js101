/* PEDAC only focussing on the D section

Test Algorithm

Test 1
	Inputs
		Integer: bill 200
		Integer: percentage: 15
	Output
		Integer: Tip: $30.00
		Integer: Total: $230.00

Test 2
	Inputs
		Integer: bill 5
		Integer: percentage: 1.5
	Output
		Integer: Tip: $0.09
		Integer: Total: $5.09	


Algorithm
1. Create a variable to store the bill integer entered

2. Create another variable to store the percentage integer entered

3. Create a function tipCalculator to process both variable inputs 
	1. Calculate the tip tipAmount that will be added to the totalAmount
	2. Console log the tipAmount

	3. Calculate the tip totalAmount that will include the tipAmount and the totalAmount summed

4. Return the totalAmount as an Integer value and the tipAmount as an Integer value output to the console

Code
*/

// Load the Node module to input values in the console

let rlSync = require("readline-sync");

let bill = rlSync.questionInt("What is the bill?\n");
let percentage = rlSync.questionInt("What is the tip percentage?\n");

function tipCalculator(amount, perc) {
	let tipAmount = (amount / 100) * perc;
	console.log(`The tip is: $${tipAmount.toFixed(2)}`);

	let totalAmount  = amount + tipAmount;
	console.log(`The total is: $${totalAmount.toFixed(2)}`);
}


tipCalculator(bill, percentage);

// Test case 4: Calculate tip for $0 with 0% tip percentage
// Expected output:
// The tip is: $0.00
// The total is: $0.00