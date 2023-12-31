// Write a JavaScript function to apply the Bubble Sort algorithm.
// Note : According to wikipedia "Bubble sort, sometimes referred 
// to as sinking sort, is a simple sorting algorithm that works by
// repeatedly stepping through the list to be sorted, comparing each 
// pair of adjacent items and swapping them if they are in the wrong order".
// Sample array: [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
// Expected output: [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]

function bubbleSort(input){
    for (let i = 0; i < input.length; i++) {
        for (let j = i+1; j < array.length; j++) {
            if(input[i]>input[j]){
                let temp=input[i];
                input[i]=input[j];
                input[j]=temp;
            }
        }
    }
    return input;
}
const array=[12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213];
console.log(bubbleSort(array));

/*
Output:
[
    1,   4,   9,  12,   23,
   64,  84,  98, 122,  213,
  234, 345, 455, 546, 3223 
]

 */
