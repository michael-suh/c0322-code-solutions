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
// if the input does not equal to a blank, use split method to divide up words in the input
// otherwise, if the input is anything but a string, return an empty array
