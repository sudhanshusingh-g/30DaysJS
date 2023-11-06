// Reverse a number
// Write a JavaScript function that reverses a number.
// Sample Data and output:
// Example: 
// x = 32243;
// Expected Output: 34223

function reverse(n){
    let rev=0;
    while(n!=0){
        let rem=n%10;
        rev=rev*10+rem;
        n=Math.floor(n/10);
    }
    return rev;
}
console.log(reverse(32243));
