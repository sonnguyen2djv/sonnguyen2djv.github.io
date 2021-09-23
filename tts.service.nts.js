function textToSpeech(textInput, language) {
  if (!textInput) {
    alert('Empty input!')
  } else {
    if (!language) {
      playAudioFromUrl(`audio/FEMALE/JA_JP/${textInput}.mp3`);
    } else {
      playAudioFromUrl(`audio/FEMALE/VI_VN/${textInput}.mp3`);
    }
  }
}
function playAudioFromUrl(audioUrl) {
  const audioElm = new Audio(audioUrl);
  return audioElm.play();
}
