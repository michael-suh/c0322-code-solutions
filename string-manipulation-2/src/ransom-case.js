/* exported ransomCase */
function ransomCase(string) {
  var ransomcased = '';
  for (var i = 0; i < string.length; i++) {
    if ((i % 2) === 0) {
      ransomcased += string[i].toLowerCase();
    } else {
      ransomcased += string[i].toUpperCase();
    }
  }
  return ransomcased;
}

// Declare an empty string value and assign it to var ransomcased
// use conditional and the remainder to make even numbers of the character lowercase and odd numbers uppercase.
// return var ransomcased
