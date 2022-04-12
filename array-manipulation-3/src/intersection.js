/* exported intersection */
function intersection(first, second) {
  var result = [];
  for (var i = 0; i < first.length; i++) {
    if (second.includes(first[i])) {
      result.push(first[i]);
    }
  }
  return result;
}

// declare an empty array for var result
// use for loop to loop through first.length
// if second input includes first[i], push first[i]
// return result array
