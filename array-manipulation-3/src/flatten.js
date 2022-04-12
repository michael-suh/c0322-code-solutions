/* exported flatten */
function flatten(array) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    if (!Array.isArray(array[i])) {
      result.push(array[i]);
    } else {
      for (var z = 0; z < array[i].length; z++) {
        result.push(array[i][z]);
      }
    }
  }
  return result;
}

// hint: use Array.isArray

// test if value is an array using the hint
// if !Array.isArray(array[i]), push array at index to var result
// if array at index is an array, use a for loop then push;
// use nested for loop to push other arrays from parameter to var result
// return result;
