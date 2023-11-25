// Problem Description:
// Write a JavaScript function named findFirstNegative
// that finds and returns the first negative number in an array using the find() method.
// Inputs:
// An array of numbers.
// Outputs:
// A number representing the first negative number in the array or undefined if 
// there are no negative numbers.
// Hints:
// The find() method returns the value of the first element in the array that 
// satisfies the provided testing function.
// Solution Approach:
// Use the find() method and provide a callback that checks if the number is negative.
function findFirstNegative(number){
    return number<0;
}
console.log([2,12,32,4,8].find(findFirstNegative));//undefined
console.log([21,1,-3,14,80].find(findFirstNegative));//-3