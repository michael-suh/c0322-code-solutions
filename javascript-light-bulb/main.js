var numberOfClicks = 0;
var $centerButton = document.querySelector('.center-button');
var $backgroundColor = document.querySelector('.background-color');

function clickButton(event) {
  numberOfClicks++;
  if (numberOfClicks % 2 === 0) {
    $centerButton.className = 'center-button dark';
    $backgroundColor.className = 'background-color dark';
  } else {
    $centerButton.className = 'center-button bright';
    $backgroundColor.className = 'background-color bright';
  }
}

$centerButton.addEventListener('click', clickButton);
