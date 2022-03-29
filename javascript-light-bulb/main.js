var $centerButton = document.querySelector('.center-button');
var $backgroundColor = document.querySelector('.background-color');

function clickButton(event) {
  if ($backgroundColor.className === 'background-color dark') {
    $centerButton.className = 'center-button bright';
    $backgroundColor.className = 'background-color bright';
  } else {
    $centerButton.className = 'center-button dark';
    $backgroundColor.className = 'background-color dark';
  }
}

$centerButton.addEventListener('click', clickButton);
