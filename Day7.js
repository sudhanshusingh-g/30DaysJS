// Write a JavaScript program 
// to check a pair of numbers and return true if one of
// the numbers is 50 or if their sum is 50.
function checkPair(a,b){
    return (a==50) || (b==50) || (a+b==50);
}
console.log(checkPair(21,32));//false
console.log(checkPair(21,50));//true
console.log(checkPair(21,29));//true