import PropTypes from 'prop-types';
import { useSpeech } from '../hooks/useSpeech';
import { toSpeakableText } from '../utils/speech';
import './SpeakButton.css';

const SpeakButton = ({ text }) => {
  const { speak, stop, isSpeaking, isSupported } = useSpeech();

  if (!isSupported) return null;

  return (
    <button
      type='button'
      className='speak-button'
      aria-pressed={isSpeaking}
      onClick={() => (isSpeaking ? stop() : speak(toSpeakableText(text)))}
    >
      <svg className='speak-button-icon' viewBox='0 0 24 24' aria-hidden='true'>
        {isSpeaking ? (
          <rect x='6' y='6' width='12' height='12' rx='2' />
        ) : (
          <path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.5 4.5 0 0 0 2.5-4zM14 3.2v2.1a7 7 0 0 1 0 13.4v2.1a9 9 0 0 0 0-17.6z' />
        )}
      </svg>
      {isSpeaking ? 'Stop' : 'Listen'}
    </button>
  );
};

SpeakButton.propTypes = {
  text: PropTypes.string.isRequired,
};

export default SpeakButton;
