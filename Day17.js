// Write a JavaScript function named filterOutOdd that uses the filter() method to filter out odd numbers from an array.
// Inputs:
// An array of numbers.
// Outputs:
// An array of numbers without odd numbers.
// Hints:
// Use the filter() method to create a new array with all elements that pass the test implemented by the provided function.
// Solution Approach:
// Use the filter() method and provide a callback that checks if the number is even.

function isEven(num){
    return num%2==0
}
function filterOutOdd(array){
    return array.filter(isEven)
}
console.log(filterOutOdd([17,15,19,2,5,6,8]));