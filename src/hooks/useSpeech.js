import { useCallback, useEffect, useRef, useState } from 'react';

const isSupported =
  typeof window !== 'undefined' && 'speechSynthesis' in window;

/**
 * Text-to-speech through the browser's Web Speech API.
 * Only one utterance plays at a time across the whole app: starting a new one
 * stops whichever was playing before.
 *
 * @param {string} lang BCP 47 language tag of the text to read.
 */
export const useSpeech = (lang = 'en-US') => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const utteranceRef = useRef(null);

  const stop = useCallback(() => {
    if (!isSupported) return;
    // Detach first so cancelling doesn't flip state of an unmounted component.
    if (utteranceRef.current) {
      utteranceRef.current.onend = null;
      utteranceRef.current.onerror = null;
      utteranceRef.current = null;
    }
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
  }, []);

  const speak = useCallback(
    (text) => {
      if (!isSupported) return;
      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = lang;
      utterance.rate = 0.9;
      const finish = () => {
        utteranceRef.current = null;
        setIsSpeaking(false);
      };
      utterance.onend = finish;
      utterance.onerror = finish;

      utteranceRef.current = utterance;
      setIsSpeaking(true);
      window.speechSynthesis.speak(utterance);
    },
    [lang],
  );

  // Stop reading if this component goes away mid-sentence, but never cut off
  // speech started by another instance.
  useEffect(
    () => () => {
      if (utteranceRef.current) stop();
    },
    [stop],
  );

  return { speak, stop, isSpeaking, isSupported };
};
