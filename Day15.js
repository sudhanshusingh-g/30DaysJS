// create a string_chop function that takes a string and chop factor(size) and chops out the string into the factor(size) that has been passed
// Test Data :
// console.log(string_chop('Scaler'));
// console.log(string_chop('Scaler',2));
// ["Scaler"]
// ['Sc' , 'al' ,'er']
function string_chop(string,chopSize=1){
    if(chopSize<=0){
        return "Chop size must be greater than 0";
    }
    const output=[];
    for(let i=0;i<string.length;i+=chopSize){
        output.push(string.slice(i,i+chopSize));
    }
    return output;
}
console.log(string_chop('Momentum',3));
console.log(string_chop('Dragon',2));
console.log(string_chop('Roller Coster',4));