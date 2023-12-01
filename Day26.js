// Write a function calculateTotal that takes an 
// array of numbers, filters out the even numbers,
// squares the remaining numbers, and then calculates their sum.
// Solution Approach:
// Combine map, filter, and reduce array methods.
function calculateTotal(num){
    const oddNumbers=num.filter(number=>number%2!=0);
    console.log(oddNumbers);
    const squares=oddNumbers.map(number=>number**2);
    console.log(squares);
    const total=squares.reduce((acc,curr)=>acc+curr,0);
    return total;
}
const array=[3,2,4,1,6,7];
const result=calculateTotal(array);
console.log(result);