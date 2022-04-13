var $h1 = document.querySelector('h1');
var nIntervId = setInterval(countDown, 1000);
var count = 4;

function countDown() {
  $h1.textContent = count--;
  if (count === -1) {
    $h1.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(nIntervId);
  }
}
