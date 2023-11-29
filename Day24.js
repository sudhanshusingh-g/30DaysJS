// Implement a debounce function that takes a function and a delay as arguments. The returned function should ensure that the original function is not called more than once in the specified delay.
// Solution Approach:
// Use a timer and clear it on each invocation to delay the function execution.
function debounce(func, delay) {
    let timer;
  
    return function() {
      const context = this;
      const args = arguments;
  
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(context, args);
      }, delay);
    };
  }
  
  // Example usage:
  function myFunction() {
    console.log('Debounced function called!');
  }
  
  const debouncedFunction = debounce(myFunction, 1000);
  
  // Call the debounced function multiple times, but it will only execute once after the last call within the specified delay.
  debouncedFunction();
  debouncedFunction();
  debouncedFunction();
  // After 1000 milliseconds (1 second) from the last call, myFunction will be invoked.
  