var $tabContainer = document.querySelector('.tab-container');
var $allTab = document.querySelectorAll('.tab');
var $allView = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', switchTab);

function switchTab(event) {
  if (event.target.matches('.tab')) {
    for (var i = 0; i < $allTab.length; i++) {
      if (event.target === $allTab[i]) {
        $allTab[i].className = 'tab active';
      } else {
        $allTab[i].className = 'tab';
      }
    }
    var $dataView = event.target.getAttribute('data-view');
    for (var z = 0; z < $allView.length; z++) {
      if ($allView[z].getAttribute('data-view') === $dataView) {
        $allView[z].className = 'view';
      } else {
        $allView[z].className = 'view hidden';
      }
    }
  }
}

// declare function
// use if statement
// for loop within if statement
// if statement within for loop (to see if event.target = alltab[i])
// if yes, tab active, if not, tab

// declare new var for dataview and set it equal to event.target.getattribute('data-view')
// use for loop for allview
// use if statement within for loop to see if allview at index = dataview
// if yes, view. if no, view hidden
