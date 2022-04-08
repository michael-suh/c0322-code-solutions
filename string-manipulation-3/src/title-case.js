/* exported titleCase */
function titleCase(title) {
  var word = title.toLowerCase().split(' ');
  var minor = ['in', 'for', 'of', 'the', 'and', 'or', 'nor', 'but', 'a', 'as', 'at', 'an', 'by', 'on', 'per', 'to'];
  for (var i = 0; i < word.length; i++) {
    if (word[i].includes('-')) {
      var divideHyphen = word[i].split('-');
      for (var z = 0; z < divideHyphen.length; z++) {
        divideHyphen[z] = divideHyphen[z].charAt(0).toUpperCase() + divideHyphen[z].slice(1);
      }
      var hyphen = divideHyphen.join('-');
      word[i] = hyphen;
    } else if (word[i] === 'api') {
      word[i] = 'API';
    } else if (word[i] === 'javascript') {
      word[i] = 'JavaScript';
    } else if (word[i] === 'javascript:') {
      word[i] = 'JavaScript:';
    } else if (word[i].length >= 4) {
      word[i] = word[i].charAt(0).toUpperCase() + word[i].slice(1);
    } else if (minor.indexOf(word[i]) === -1) {
      word[i] = word[i].charAt(0).toUpperCase() + word[i].slice(1);
    } else if (i === 0) {
      word[i] = word[i].charAt(0).toUpperCase() + word[i].slice(1);
    } else if (word[i - 1].includes(':')) {
      word[i] = word[i].charAt(0).toUpperCase() + word[i].slice(1);
    }
  }
  var result = word.join(' ');
  return result;
}

// make each char lowercase and split them
// include a variable with articles, prepositions, and conjunctions in an array
// use charAt(0) and toUpperCase()
// use if statement
// use if statement for any titles with - inside
// use if statement for javascript to strictly equal to JavaScript
// use if statement for api to strictly equal to API
// use if statement to make any word after : into uppercase even if it is in the minor array
// use if statement to make any first character into uppercase even if it is in the minor array
