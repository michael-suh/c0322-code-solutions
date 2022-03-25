/* exported getWords */
function getWords(string) {
  var result = [];
  if (string !== '') {
    result = string.split(' ');
  } else {
    string = result;
  }
  return result;
}

// create an empty array for variable result
// create a conditional to see if the input has a value of string.
// if the input is not an empty string, use split method to divide up words in the input
// otherwise, if the input is anything but an empty string, return an empty array
