let URL_TTS_SERVER = 'http://localhost:8080'; // Allow editing url!
/**@param {string} textInput
 * @param {'ja_jp'|'vi_vn'} [language]*/
function textToSpeech(textInput, language) {
  if (!textInput) {
    alert('Empty input!')
  } else {
    const urlTTS = URL_TTS_SERVER+'/tts'
    fetch(urlTTS, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        text: textInput,
        language: language,
      }) // body data type must match "Content-Type" header
    }).then(async response => {
      console.log('response=<below>');
      console.log(response);
      const responseAsJson = await response.text();
      console.log(`responseAsJson=${responseAsJson}`);
      const audioUrl = URL_TTS_SERVER + responseAsJson.replace('audio/','/my-audio/');
      playAudioFromUrl(audioUrl);
    }).catch(error => {
      console.error('error=<below>');
      console.error(error);
    });
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
