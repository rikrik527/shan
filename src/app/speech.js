var obj = require('./getall');

function speech(say) {
    if ('speechSynthesis' in window) {
        var utterance = new SpeechSynthesisUtterance(say);
        speechSynthesis.speak(utterance);
    }
}
module.exports = speech;