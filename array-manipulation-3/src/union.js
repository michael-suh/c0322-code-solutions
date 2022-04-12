/* exported union */
function union(first, second) {
  var result = [];
  for (var i = 0; i < first.length; i++) {
    if (!result.includes(first[i])) {
      result.push(first[i]);
    }
  }
  // eslint-disable-next-line no-redeclare
  for (var i = 0; i < second.length; i++) {
    if (!result.includes(second[i])) {
      result.push(second[i]);
    }
  }
  return result;
}

// declare an empty array for var result
// use for loop to loop through first parameter
// if result does not include first[i], push that into result array
// use for loop to loop through second parameter
// if result does not include second[i], push that into result array
// return result array
