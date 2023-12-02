// Write a generator function range that takes two arguments, start and end, 
// and yields all the numbers in that range.
// Solution Approach:
// Use the function* syntax for generator functions and the yield keyword.
function* generator(start,end) {
    for (let index = start; index <= end; index++) {
        yield index;
    }
}
const range=generator(-1,8)
for(let n of range){
    console.log(n);
}
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8