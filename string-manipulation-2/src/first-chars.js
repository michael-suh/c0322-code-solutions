/* exported firstChars */
function firstChars(length, string) {
  var result = '';
  for (var i = 0; i < length; i++) {
    if (string[i]) {
      result += string[i];
    }
  }
  return result;
}

// create an empty string for var result
// use a for loop to loop through the length of a string
// for condition in the for loop, run it until i is less than the length (input)
// use if conditional statement to add the empty string and string[i] together
// return var result
