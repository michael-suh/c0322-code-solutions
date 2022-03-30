var $contactForm = document.forms[0];

$contactForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  var result = {
    name: $contactForm.elements[0].value,
    email: $contactForm.elements[1].value,
    message: $contactForm.elements[2].value
  };

  console.log(result);
  $contactForm.reset();
}
