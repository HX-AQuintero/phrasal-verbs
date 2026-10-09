/** Turns on-screen text into something a speech engine reads naturally. */
export const toSpeakableText = (text) =>
  text.replace(/\s*\/\s*/g, ' or ').replace(/\s+/g, ' ').trim();
