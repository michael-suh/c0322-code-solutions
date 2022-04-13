/* !!INSTRUCTION/BRAINSTORM!!
- automatically steppung to next image every 3 seconds.
- when it reaches last image, reset to first image.
- when user clicks icon OR the dot, switch image.
- total of 4 functions: switchimage, handlelefticon, handlerighticon, handledoticon
*/
var $image = document.querySelector('img');
var $dotIcon = document.querySelectorAll('.fa-circle');
var $leftIcon = document.querySelector('#left-angle');
var $rightIcon = document.querySelector('#right-angle');

var images = ['images/001.png', 'images/004.png', 'images/007.png', 'images/025.png', 'images/039.png'];
var currentImage = 0;
var intervalId = setInterval(switchImage, 3000);

$leftIcon.addEventListener('click', handleLeftIcon);
$rightIcon.addEventListener('click', handleRightIcon);
for (var i = 0; i < $dotIcon.length; i++) {
  $dotIcon[i].addEventListener('click', handleDotIcon);
}

// function switchimage = if current image is less than images.length, set current image to 0
// for loop: if currentimage != i, set attribute images[i], 'far fa-circle'
// return images[currentimage], 'fas fa-circle'

function switchImage() {
  currentImage++;
  if (currentImage > images.length - 1) {
    currentImage = 0;
  }
  for (var i = 0; i < images.length; i++) {
    if (currentImage !== i) {
      $image.setAttribute('src', images[i]);
      $dotIcon[i].setAttribute('class', 'far fa-circle');
    }
  }
  $image.setAttribute('src', images[currentImage]);
  $dotIcon[currentImage].setAttribute('class', 'fas fa-circle');
}

// function handlelefticon = reverse for loop
// decrement currentimage and move doticon to the left
// if currentimage is less than 0, = images.length - 1
// copy return from switchimage

function handleLeftIcon() {
  clearInterval(intervalId);
  intervalId = setInterval(switchImage, 3000);
  for (var i = images.length - 1; i >= 0; i--) {
    $image.setAttribute('src', images[i]);
    $dotIcon[i].setAttribute('class', 'far fa-circle');
  }
  currentImage--;
  if (currentImage < 0) {
    currentImage = images.length - 1;
  }
  $image.setAttribute('src', images[currentImage]);
  $dotIcon[currentImage].setAttribute('class', 'fas fa-circle');
}

// function handlerighticon = exact opposite of handlelefticon (don't reverse)
// increment currentimage and move doticon to right
// if currentimage > images.length - 1, make currentimage = 0
// copy return from switchimage

function handleRightIcon() {
  clearInterval(intervalId);
  intervalId = setInterval(switchImage, 3000);
  for (var i = 0; i < images.length; i++) {
    $image.setAttribute('src', images[i]);
    $dotIcon[i].setAttribute('class', 'far fa-circle');
  }
  currentImage++;
  if (currentImage > images.length - 1) {
    currentImage = 0;
  }
  $image.setAttribute('src', images[currentImage]);
  $dotIcon[currentImage].setAttribute('class', 'fas fa-circle');
}

// function handledoticon = go to the image when clicked on
// for loop: if event.target = doticon[i], set attribute to images[i] and fas fa-circle
function handleDotIcon(event) {
  clearInterval(intervalId);
  intervalId = setInterval(switchImage, 3000);
  for (var i = 0; i < $dotIcon.length; i++) {
    if (event.target === $dotIcon[i]) {
      $image.setAttribute('src', images[i]);
      $dotIcon[i].setAttribute('class', 'fas fa-circle');
    } else {
      $dotIcon[i].setAttribute('class', 'far fa-circle');
    }
  }
  currentImage = i;
}
