/* exported reverseWord */
function reverseWord(word) {
  var reverse = '';
  for (var i = word.length - 1; i >= 0; i--) {
    reverse += word[i];
  }
  return reverse;
}

// create a new variable with empty string for output.
// use for loop and reverse the initialization and conditional.
// add variable reverse and input[i] to get an output.
// return variable reverse.
