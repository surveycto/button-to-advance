function keypress (e) {
  const key = e.key
  if (key == continueKey) {
    setAnswer('1')
    goToNextField()
  }
}

function clearAnswer () {
  setAnswer('')
}

/* global setAnswer, goToNextField, getPluginParameter, fieldProperties */

var continueKey = getPluginParameter('key')

if (continueKey == null) {
  continueKey = ' '
}

var allowBack = getPluginParameter('continue')
var currentAnswer = fieldProperties.CURRENT_ANSWER

if ((allowBack != 1) && (currentAnswer != null)) { // If not allowed to go back here, and there is already a value, then skips forward
  goToNextField()
}

document.addEventListener('keyup', keypress)
