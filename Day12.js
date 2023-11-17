// Challenge 12
// Write a JavaScript program to create a clock.
// Note: The output will come every second.
// Expected Console Output:
// "14:37:42"
// "14:37:43"
//  "14:37:44"
// "14:37:45"
// "14:37:46"
// "14:37:47"
function clock() {
    const d = new Date();
    const hours=d.getHours();
    const minute=d.getMinutes();
    const second=d.getSeconds();
    console.log(hours+":"+minute+":"+second);
  }
  setInterval(clock,1000);