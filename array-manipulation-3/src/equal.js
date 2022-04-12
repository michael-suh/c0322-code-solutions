/* exported equal */
function equal(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  for (var i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;
}

// use if statement to compare length of each parameters
// return false if they do not equal to each other
// use for loop to loop through first.length and if first[i] !== second [i], return false
// otherwise, return true
