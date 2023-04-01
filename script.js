// Your script here.
// Populate the voices dropdown
function populateVoices() {
  const voices = speechSynthesis.getVoices();
  voicesDropdown.innerHTML = voices
    .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
    .join('');
}

// Start speaking
function speak() {
  // Create a new SpeechSynthesisUtterance object
  const utterance = new SpeechSynthesisUtterance(textarea.value);

  // Set the selected voice
  const selectedVoice = voicesDropdown.value;
  const voices = speechSynthesis.getVoices();
  const voice = voices.find(v => v.name === selectedVoice);
  utterance.voice = voice;

  // Set the rate and pitch
  utterance.rate = rate.value;
  utterance.pitch = pitch.value;