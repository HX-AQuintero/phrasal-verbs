import { useState } from 'react';
import PropTypes from 'prop-types';
import SpeakButton from '../SpeakButton';
import SessionSummary from './SessionSummary';
import { verbShape } from './verbShape';

const pluralize = (count, word) => `${count} ${word}${count === 1 ? '' : 's'}`;

const Flashcards = ({ deck, onRestart, onExit }) => {
  const [queue, setQueue] = useState(deck);
  const [isFlipped, setIsFlipped] = useState(false);
  const [learned, setLearned] = useState(0);
  const [repeats, setRepeats] = useState(0);

  const current = queue[0];
  const total = deck.length;

  const answer = (knewIt) => {
    // Cards marked "Again" go to the back of the queue and come up later.
    setQueue((cards) =>
      knewIt ? cards.slice(1) : [...cards.slice(1), cards[0]],
    );
    if (knewIt) setLearned((count) => count + 1);
    else setRepeats((count) => count + 1);
    setIsFlipped(false);
  };

  if (!current) {
    const repeatNote = repeats ? ` and repeated ${pluralize(repeats, 'time')}` : '';

    return (
      <SessionSummary
        title='Session complete'
        stats={`You learned ${pluralize(total, 'card')}${repeatNote}.`}
        onRestart={onRestart}
        onExit={onExit}
      />
    );
  }

  return (
    <section className='study-panel' aria-label='Flashcards'>
      <div className='study-progress'>
        <progress className='study-progress-bar' value={learned} max={total} />
        <span className='study-progress-label'>
          {learned} / {total}
        </span>
      </div>

      <div className='study-card' aria-live='polite'>
        <p className='study-card-title'>{current.title}</p>
        {isFlipped && (
          <>
            <p className='study-card-meaning'>{current.meaning}</p>
            <p className='study-card-example'>{current.example}</p>
            <SpeakButton text={`${current.title}. ${current.example}`} />
          </>
        )}
      </div>

      <div className='study-actions'>
        {isFlipped ? (
          <>
            <button
              type='button'
              className='study-button study-button--secondary'
              onClick={() => answer(false)}
            >
              Again
            </button>
            <button
              type='button'
              className='study-button'
              onClick={() => answer(true)}
            >
              Got it
            </button>
          </>
        ) : (
          <button
            type='button'
            className='study-button'
            onClick={() => setIsFlipped(true)}
          >
            Show meaning
          </button>
        )}
      </div>

      <button type='button' className='study-link' onClick={onExit}>
        End session
      </button>
    </section>
  );
};

Flashcards.propTypes = {
  deck: PropTypes.arrayOf(verbShape).isRequired,
  onRestart: PropTypes.func.isRequired,
  onExit: PropTypes.func.isRequired,
};

export default Flashcards;
