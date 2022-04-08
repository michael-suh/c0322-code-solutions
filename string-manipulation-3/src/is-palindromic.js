/* exported isPalindromic */
function isPalindromic(string) {
  string = string.split(' ').join('');
  var result = '';
  for (var i = string.length - 1; i >= 0; i--) {
    result += string[i];
  }
  return result === string;
}

// use split and join method on the input to account for spaces
// declare an empty string to var result
// use a for loop and reverse initialization and conditional and set i to negative increment
// set string[i] and add it to var to get result
// return result strictly equal to string
