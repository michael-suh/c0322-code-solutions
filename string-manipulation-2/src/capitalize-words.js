/* exported capitalizeWords */
function capitalizeWords(string) {
  var newstr = '';
  var capitalize = true;
  for (var i = 0; i < string.length; i++) {
    if (capitalize) {
      newstr += string[i].toUpperCase();
      capitalize = false;
    } else if (string[i] === ' ') {
      newstr += string[i];
      capitalize = true;
    } else {
      newstr += string[i].toLowerCase();
    }
  }
  return newstr;
}
