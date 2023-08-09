import { useEffect } from 'react';
import './App.css';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';


function App() {
  const {
    transcript,
    listening,
    resetTranscript,
  } = useSpeechRecognition();

  const options = {
    continuous: false
  }

  const { startListening, stopListening } = SpeechRecognition;

  const handleStartListening = () => {
    startListening(options);
  };

  useEffect(() => {
    if (!listening) { stopListening(); resetTranscript(); }
  }, [listening])

  return (
    <div className="App">
       <p>Speaking: {listening ? 'Yes' : 'No'}</p>
      <button disabled={listening} style={buttonContainer} onClick={handleStartListening}>Start</button>
      <p>{transcript ? 'Speech Detection: ' + transcript : 'No Text Detected'}</p>
    </div>
  );
}

const buttonContainer = { padding: '10px', backgroundColor: 'grey', borderWidth: 0, marginRight: 10 };
export default App;
