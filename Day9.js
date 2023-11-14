// Write a JavaScript function
// to find the first not repeated character.
// Sample arguments : 'abacddbec'
// Expected output : 'e'

function firstNonRepeatedCharacter(string) {
    for (var i = 0; i < string.length; i++) {
      var c = string.charAt(i);
      if (string.indexOf(c) == i && string.indexOf(c, i + 1) == -1) {
        return c;
      }
    }
    return null;
}
console.log(firstNonRepeatedCharacter("abacddbec"));//e
console.log(firstNonRepeatedCharacter("ababcd"));//c