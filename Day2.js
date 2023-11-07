// Write a JavaScript function that accepts a string as a parameter 
// and converts the first letter of each word into upper case.

// Example string: 'the quick brown fox'
// Expected Output: 'The Quick Brown Fox '


const input="the quick brown fox"
function caseConversion(input){
    let words=input.split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase()+words[i].substring(1);
    }
    return words.join(" ");
}

console.log(caseConversion(input));
