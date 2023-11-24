// Write a JavaScript function named allPositive that 
// checks whether all numbers in a given array are positive using the every() method.
// Inputs:
// An array of numbers.
// Outputs:
// A boolean value. Return true if all numbers are positive, otherwise false.
// Hints:
// The every() method tests whether all elements in the array pass the test 
// implemented by the provided function.
// Solution Approach:
// Use the every() method and provide a callback that checks if the number is positive.
function allPositive(number){
    return number>0;
}
let array=[-3,4,12,45,0,-1];
console.log(array.every(allPositive));//false
 array=[13,40,23,,11];
 console.log(array.every(allPositive));//true
 array=[];
 console.log(array.every(allPositive));//true