// Part 1: Thinking Functionally -------------------
console.log(`Part 1: Thinking Functionally -------------------`);

// Take an array of numbers and return the sum.
console.log(`Take an array of numbers and return the sum:`);

// Method 1: Looping through the array
// let array = [2, 2, 2]
// let answer = 0;
// function sum(array) {
// 	for (let i = 0; i < array.length; i++) {
// 		answer += array[i];
// 	}
// 	return answer;
// }
// console.log(sum(array));

// Method 2: For Each Method - callback function
// let array = [2, 2, 2];
// let answer = 0;
// function sum(array) {
// 	array.forEach(function(element) {
// 		answer += element;
// 	});
// 	return answer;
// }
// console.log(sum(array));

// Method 3: For Of Loop
let array = [2, 24, 4];
let answer = 0;

function sum(array) {
	for (let num of array) {
		answer += num;
	}
	return answer;
}
console.log(sum(array));

// Take an array of numbers and return the average.
console.log(`Take an array of numbers and return the average:`);
 let numAverage = 0;
 function average (array) {
	for (let num of array) {
		numAverage += num;
	}
	numAverage = numAverage / array.length;
	return numAverage;
 }
console.log(average(array));

// Take an array of strings and return the longest string.
console.log(`Take an array of strings and return the longest string:`);

let array = ["apple", "mango", "orange", "grape", "kiwi"];
function longestString(array) {
	for (char in string) {
		while char 
	}
	for (i = 0; i < string.length; i++) {
		if string.length 
	}
}
console.log(longestString(array));

// Take an array of strings, and a number and return an array of the strings that are longer than the given number. 
	// For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].
	console.log(`Take an array of strings, and a number and return an array of the strings that are longer than the given number:`);


// Take a number, n, and print every number between 1 and n without using loops. Use recursion.
console.log(`Take a number, n, and print every number between 1 and n without using loops (use recursion):`)