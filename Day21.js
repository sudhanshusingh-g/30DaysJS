// Problem Statement: Write an asynchronous loop function that iterates over an array and 
// performs an asynchronous operation on each element.
// Description: The function should take an array and an async function, applying the async 
// function to each element in the array in sequence.
// Solution Approach: Use async/await within a for...of loop.
async function asyncLoop(array,asyncOp){
    for(const item of array){
        await asyncOp(item);
    }
}

const array=[7,8,9,10,21];

async function sampleSyncFunction(item){
    await new Promise((resolve)=> setTimeout(resolve,1000));
    console.log(item);
}
asyncLoop(array,sampleSyncFunction);