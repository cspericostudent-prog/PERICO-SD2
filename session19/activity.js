	// NAME 1:
	// NAME 2:
	
	/*
    1. Create a function called getCircleArea which will be able to get total area of a circle from a provided radius.
		- a number should be provided as an argument.
		- look up the formula for calculating the area of a circle with a provided/given radius.
		- look up the use of the exponent operator.
		- return the result of the area calculation.

		Create a new variable called circleArea.
		- This variable should be able to receive and store the result of the circle area calculation.
		- Log the value of the circleArea variable in the console.

	2. Create a function called getAverage which will be able to get total average of four numbers.
		- 4 numbers should be provided as an argument.
		- look up the formula for calculating the average of numbers.
		- return the result of the average calculation.
		
		Create a new variable called averageVar.
		- This variable should be able to receive and store the result of the average calculation
		- Log the value of the averageVar variable in the console.
	

	3. Create a function called checkIfPassed which will be able to check if you passed by checking the percentage of your score against the passing percentage.
		- this function should take 2 numbers as an argument, your score and the total score.
		- First, get the percentage of your score against the total. You can look up the formula to get percentage.
		- Using a relational operator, check if your score percentage is greater than 75, the passing percentage. Save the value of the comparison in a variable called isPassed.
		- return the value of the variable isPassed.
		- This function should return a boolean.

		Create a global variable called outside of the function called isPassingScore.
			-This variable should be able to receive and store the boolean result of the checker function.
			-Log the value of the isPassingScore variable in the console.
        */



/* 1. Circle Area Function
   Formula: Area = π * r²
*/
// function getCircleArea(radius) {

//     return Math.PI * (radius ** 2);
// }

// let circleArea = getCircleArea(5);
// console.log("Circle Area:", circleArea);


// /* 2. Average Function
// Formula: (a + b + c + d) / 4
// */
// function getAverage(num1, num2, num3, num4) {
//     return (num1 + num2 + num3 + num4) / 4;
// }

// let averageVar = getAverage(79, 75, 75, 72);
// console.log("Average:", averageVar);



// /* 3. Function: checkIfPassed
//    - Takes 2 numbers: score and totalScore.
//    - Calculates the percentage.
//    - Checks if percentage is strictly greater than 75.
// */
// function checkIfPassed(score, totalScore) {
//     // Calculate the percentage
//     let percentage = (score / totalScore) * 100;

//     // Use a relational operator to check if it's > 75
//     // This returns true if higher than 75, and false if 75 or lower.
//     let isPassed = percentage <= 75;

//     // Return the boolean value
//     return isPassed;
// }

// // Global variable outside the function
// let isPassingScore = checkIfPassed(76, 100);

// // Log the result to the console
// console.log(isPassingScore);


function getCircleArea(radius) {
    return Math.PI * radius ** 2;
}

let circleArea = getCircleArea(5); // Example radius
console.log("Circle Area:", circleArea);

function getAverage(a, b, c, d) {
    return (a + b + c + d) / 4;
}

let averageVar = getAverage(80, 80, 79, 75); 
console.log("Average:", averageVar);

function checkIfPassed(score, total) {
    let percentage = (score / total) * 100;
    let isPassed = percentage > 75;
    return isPassed;
}

let isPassingScore = checkIfPassed(80, 100); 
console.log("Is Passing Score:", isPassingScore);


