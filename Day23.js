// Write a function counter that returns a new function on each invocation. 
// The returned function, when called, should increment the counter value and return it.
// Solution Approach:
// Utilize closure to maintain the state of the counter.

function counter(){
    let counter=0;
    function incrementCounter(){
        counter++;
        console.log(counter);
    }
    return incrementCounter;
}

let invoke=counter();

invoke();
invoke();
invoke();
invoke();