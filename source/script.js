/* global setAnswer, goToNextField, getPluginParameter, fieldProperties */

var continueKey = getPluginParameter('key')
var allowback = getPluginParameter('allowback')
var nobutton = getPluginParameter('nobutton')
var buttontext = getPluginParameter('buttontext')

var currentAnswer = fieldProperties.CURRENT_ANSWER
var startButton = document.querySelector('#startbutton')

if (nobutton === 1) {
  startButton.parentElement.removeChild(startButton)
} else {
  if (buttontext == null) {
    buttontext = 'Start'
  }

  startButton.innerHTML = buttontext

  startButton.onclick = function () {
    setAnswer('2')
    goToNextField()
  }
}

if (continueKey == null) {
  continueKey = ' '
}

if ((allowback !== 1) && (currentAnswer != null)) { // If not allowed to go back here, and there is already a value, then skips forward
  goToNextField()
}

document.addEventListener('keyup', keypress)

function keypress (e) {
  const key = e.key
  if (key === continueKey) {
    setAnswer('1')
    goToNextField()
  }
}

function clearAnswer () {
  setAnswer()
}
