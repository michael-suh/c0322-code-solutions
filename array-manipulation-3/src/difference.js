/* exported difference */
function difference(first, second) {
  var result = [];
  for (var i = 0; i < first.length; i++) {
    if (second.indexOf(first[i]) === -1) {
      result.push(first[i]);
    }
  }
  // eslint-disable-next-line no-redeclare
  for (var i = 0; i < second.length; i++) {
    if (first.indexOf(second[i]) === -1) {
      result.push(second[i]);
    }
  }
  return result;
}

// declare an empty array for var result
// use for loop to loop through first
// if index of first[i] is not present in second, push first[i]
// if index of second[i] is not present in first, push second[i];
// return output
