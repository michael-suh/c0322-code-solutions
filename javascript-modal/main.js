var $openButton = document.querySelector('.open-button');
var $surveyBox = document.querySelector('.survey-box');
var $surveyButton = document.querySelector('.survey-button');

function clickOpenButton(event) {
  $surveyBox.className = 'survey-box';
}

function clickSurveyButton(event) {
  $surveyBox.className = 'survey-box hide';
}

$openButton.addEventListener('click', clickOpenButton);
$surveyButton.addEventListener('click', clickSurveyButton);
