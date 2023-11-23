// Problem Description:
// Write a JavaScript function named doubleValues 
// that takes an array of numbers and returns a new array where 
// each number is doubled using the map() method.
// Inputs:
// An array of numbers.
// Outputs:
// An array of numbers where each number is doubled.
// Hints:
// The map() method creates a new array with the results of calling a function for every array element.
const array=[12,10,6,8,7];
const result=[];
array.map((item)=>{result.push(item*2);})
console.log(result);