let URL_TTS_SERVER = 'http://localhost:8080'; // Allow editing url!
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
  audioElm.play().then(audioPlayResult => {
    console.log(`Played audio from URL:${audioUrl}`);
  }).catch(audioPlayError => {
    console.warn(`Cannot play audio from URL:${audioUrl}`);
  });
}
