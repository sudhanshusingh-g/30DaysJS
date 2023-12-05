// Implement a throttle function that ensures a given function is not called 
// more than once in a specified time interval.
// Solution Approach:
// Use a timestamp to track the last invocation time 
// and prevent calling the function if it's within the throttle interval.
function throttle(func, interval) {
    let lastInvocationTime = 0;

    return function (...args) {
        const currentTime = Date.now();

        // Check if the time elapsed since the last invocation is greater than the interval
        if (currentTime - lastInvocationTime >= interval) {
            // If enough time has passed, call the function
            const result = func.apply(this, args);
            lastInvocationTime = currentTime; // Update the last invocation time
            return result;
        } else {
            // If not enough time has passed, do nothing or handle as needed
            console.log("Function throttled. Wait for the interval to pass.");
        }
    };
}

// Example usage:
function exampleFunction() {
    console.log("Function called!");
}

const throttledFunction = throttle(exampleFunction, 2000); // Throttle to 2000 milliseconds (2 seconds) interval

// Test the throttled function
throttledFunction(); // This will print "Function called!"

// Calling it again within 2 seconds will be throttled
throttledFunction(); // This will print "Function throttled. Wait for the interval to pass."
