var $centerButton = document.querySelector('.center-button');
var $backgroundColor = document.querySelector('.background-color');
var $lightOnOrOff = true;

function clickButton(event) {
  if ($lightOnOrOff === true) {
    $centerButton.className = 'center-button dark';
    $backgroundColor.className = 'background-color dark';
    $lightOnOrOff = false;
  } else if ($lightOnOrOff === false) {
    $centerButton.className = 'center-button bright';
    $backgroundColor.className = 'background-color bright';
    $lightOnOrOff = true;
  }
}

$centerButton.addEventListener('click', clickButton);
