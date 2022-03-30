/* exported lastChars */
function lastChars(length, string) {
  var result = '';
  for (var i = string.length - length; i < string.length; i++) {
    if (string[i]) {
      result += string[i];
    }
  }
  return result;
}

// create an empty string for var result
// create a for loop to set i equal to string length - length(input)
// use if statement to add var result with string[i] if string[i]
// return string
