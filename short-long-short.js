// Write a function that takes two strings as arguments, determines the length of the two strings, and then returns the result of concatenating the shorter string, the longer string, and the shorter string once again. You may assume that the strings are of different lengths.

function shortLongShort(string1, string2) {
	if (string1.length < string2.length) {
			console.log(string1 + string2 + string1);
	} else {
			console.log(string2 + string1 + string2);
	}
}

shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');         // "xyz"
shortLongShort('abcde', 'fghij');    // "fghijabcdefghij"