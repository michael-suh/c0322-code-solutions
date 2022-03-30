/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  var result = '';
  for (var i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      result += string[secondIndex];
    } else if (i === secondIndex) {
      result += string[firstIndex];
    } else {
      result += string[i];
    }
  }
  return result;
}

// declare an empty string for var result
// use a for loop to loop through each characters of a string
// use an if statement to see if character matches the input firstIndex and if it does, log secondIndex.
// use else if statement to see if character matches the input secondIndex and if it does, log firstIndex.
// use else statement to return the value of string.
// return output
