'use strict';

// Create a function that counts all the letters in a string,
// and returns an object that has the letters as keys and the counts as values.

function countLetters(text) {
  var obj = {};
  text.split('').forEach(ch => ch in obj ? obj[ch]++ : obj[ch] = 1);
  return obj;
}



console.log(countLetters('appletree')); // {a: 1, p: 2, l: 1, e: 3, t: 1, r: 1}
