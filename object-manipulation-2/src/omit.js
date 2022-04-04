/* exported omit */
function omit(source, keys) {
  var result = {};
  var copy = true;
  for (var i in source) {
    for (var z = 0; z < keys.length; z++) {
      if (i === keys[z]) {
        copy = false;
      }
    }
    if (copy === true) {
      result[i] = source[i];
    }
    copy = true;
  }
  return result;
}

// declare an empty object literal for var result
// declare another var equal to true
// use for loop within the for in loop to loop through the keys
// if copy is equal to keys[z], set key to false
// if true, copy source to new object
// return output
