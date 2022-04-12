/* exported zip */
function zip(first, second) {
  var result = [];
  if (first.length < second.length) {
    for (var i = 0; i < first.length; i++) {
      var output = [];
      output.push(first[i]);
      output.push(second[i]);
      result.push(output);
    }
  } else {
    // eslint-disable-next-line no-redeclare
    for (var i = 0; i < second.length; i++) {
      var output2 = [];
      output2.push(first[i]);
      output2.push(second[i]);
      result.push(output2);
    }
  }
  return result;
}

// declare an empty array for var result
// use if statement to compare lengths of first and second and if first is less than second,
// use for loop to loop through first
// declare another var with an empty array
// push first[i], second[i], and the empty array into var result
// use else statement to loop through second
// push first[i], second[i], and the empty array into var result
