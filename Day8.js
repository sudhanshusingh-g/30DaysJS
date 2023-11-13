// Write a JavaScript function to get all possible subsets 
// with a fixed length (for example 2) combinations in an array.
// Sample array : [1, 2, 3] and subset length is 2
// Expected output : [[2, 1], [3, 1], [3, 2], [3, 2, 1]]

function generateSubset(arr,length){
    let n=arr.length
    const subset=[];
    for (let i = 0; i < Math.pow(2,n); i++) {
        const sets=[];
        for (let j = 0; j < n; j++) {
            if ((i>>j)&1==1) {
                sets.push(arr[j])
            }
        }
        if (sets.length>=length) {
            subset.push(sets);
        }
    }
    return subset;
}
let array=[1,2,3];
let k=2;
console.log(generateSubset(array,k));