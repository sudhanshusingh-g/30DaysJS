// Write a function raceWithTimeout that takes an array of promises and a timeout value.
// The function should resolve when the first promise resolves or reject if none
// resolve within the given timeout.
// Solution Approach:
// Use Promise.race and a timeout promise.
function raceWithTimeout(promises, timeout) {
    // Creating a promise that rejects after the specified timeout
    const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error('Timeout exceeded'));
        }, timeout);
    });

    // Using Promise.race to wait for the first promise to resolve or timeout to occur
    return Promise.race([...promises, timeoutPromise]);
}

// Example usage:
const promise1 = new Promise(resolve => setTimeout(() => resolve('Promise 1 resolved'), 1800));
const promise2 = new Promise(resolve => setTimeout(() => resolve('Promise 2 resolved'), 1500));

raceWithTimeout([promise1, promise2], 1200)
    .then(result => console.log(result))
    .catch(error => console.error(error.message));
