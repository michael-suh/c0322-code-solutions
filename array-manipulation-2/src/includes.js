/* exported includes */
function includes(array, value) {
  var result = false;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return result;
}

// assign boolean value false to var result
// use for loop to loop through each items in the array
// use if statement to see if value is present at array[i]
// if present, return true
// if not, return var result.
