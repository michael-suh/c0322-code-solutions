/* exported capitalizeWord */
function capitalizeWord(word) {
  var capitalize = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  var javascript = 'JavaScript';
  if (word.toUpperCase() === 'JAVASCRIPT') {
    return javascript;
  } else {
    return capitalize;
  }
}

// use charAt and slice method to make first character uppercase and the rest lowercase and assign it to variable capitalize
// assign string JavaScript to variable javascript
// use a conditional to see if the word equals to JAVASCRIPT when written in uppercase
// if it is, return var javascript
// if not, return var capitalize
