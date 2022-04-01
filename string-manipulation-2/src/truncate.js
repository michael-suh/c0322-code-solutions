/* exported truncate */
function truncate(length, string) {
  var truncated = '';
  for (var i = 0; i < length; i++) {
    if (string[i]) {
      truncated += string[i];
    }
  }
  return truncated + '...';
}

// Assign an empty string value to variable truncated
// use a for loop to loop through each letters of the string
// if there is a string at index, add the string value to index to the variable truncated
// return variable truncated and concatenate with '...'
