/* exported unique */
function unique(array) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    if (result.indexOf(array[i]) === -1) {
      result.push(array[i]);
    }
  }
  return result;
}

// declare an empty array for var result
// use indexOf() and set it to -1 to make sure input is not already in the array
// if it strictly equals to -1, push array[i];
// return var result;
