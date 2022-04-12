/* exported reverseWords */
function reverseWords(string) {
  var result = '';
  for (var i = string.length - 1; i >= 0; i--) {
    result += string[i];
  }
  return result.split(' ').reverse('').join(' ');
}

// set var result equal to an empty string
// use reverse for loop to loop through string and reverse initialization, conditions, and final expression.
// set result equal to result + string[i]
// use split, reverse and join method to return result string
