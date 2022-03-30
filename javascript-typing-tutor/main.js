var $span = document.querySelectorAll('span');
var i = 0;

function logKey(event) {
  $span[i].className = 'underline';
  if (event.key === $span[i].textContent) {
    $span[i].className = 'correct';
    $span[i + 1].className = 'underline';
    i++;
  } else {
    $span[i].className = 'incorrect';
  }
}

document.addEventListener('keydown', logKey);
