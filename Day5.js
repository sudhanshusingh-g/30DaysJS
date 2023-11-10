// Write a JavaScript exercise to get the filename extension.
// Test Cases
// file.txt ---> ".txt"
// class.java ---> ".java"

function getExtension(fileName){
    return fileName.substring(fileName.lastIndexOf('.')+1,fileName.length);
}
console.log(getExtension("hello.java"));// java
console.log(getExtension("index.php"));// php
console.log(getExtension("index.html"));// html
console.log(getExtension("file.txt"));// txt 
