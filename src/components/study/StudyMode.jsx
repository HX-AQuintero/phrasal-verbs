import { useMemo, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { shuffle } from '../../utils/shuffle';
import Flashcards from './Flashcards';
import Quiz from './Quiz';
import { verbShape } from './verbShape';
import './StudyMode.css';

const MODES = [
  { key: 'flashcards', label: 'Flashcards' },
  { key: 'quiz', label: 'Quiz' },
];

const LENGTHS = [10, 20, 30, 50].map((count) => ({
  key: String(count),
  label: String(count),
}));

const ChoiceGroup = ({ legend, name, choices, value, onChange }) => (
  <fieldset className='study-choices'>
    <legend className='study-subheading'>{legend}</legend>
    {choices.map(({ key, label, disabled }) => (
      <label
        key={key}
        className={`study-choice ${disabled ? 'is-disabled' : ''}`}
      >
        <input
          type='radio'
          name={name}
          value={key}
          checked={value === key}
          disabled={disabled}
          onChange={() => onChange(key)}
        />
        <span>{label}</span>
      </label>
    ))}
  </fieldset>
);

ChoiceGroup.propTypes = {
  legend: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  choices: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      disabled: PropTypes.bool,
    }),
  ).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const StudyMode = ({ verbs, favoriteIds }) => {
  const [mode, setMode] = useState('flashcards');
  const [deckType, setDeckType] = useState('all');
  const [length, setLength] = useState('10');
  const [session, setSession] = useState(null);
  const sessionCounter = useRef(0);

  const favorites = useMemo(
    () => verbs.filter(({ id }) => favoriteIds.has(id)),
    [verbs, favoriteIds],
  );

  const deckChoices = [
    { key: 'all', label: `All verbs (${verbs.length})` },
    {
      key: 'favorites',
      label: `Favorites (${favorites.length})`,
      disabled: favorites.length === 0,
    },
  ];

  const deckSize = deckType === 'favorites' ? favorites.length : verbs.length;
  const sessionSize = Math.min(Number(length), deckSize);

  // A fresh `id` remounts the session component, which resets its state.
  const startSession = () => {
    sessionCounter.current += 1;
    setSession({
      id: sessionCounter.current,
      mode,
      deck: shuffle(deckType === 'favorites' ? favorites : verbs).slice(
        0,
        sessionSize,
      ),
    });
  };

  const exitSession = () => setSession(null);

  if (session?.mode === 'flashcards') {
    return (
      <Flashcards
        key={session.id}
        deck={session.deck}
        onRestart={startSession}
        onExit={exitSession}
      />
    );
  }

  if (session?.mode === 'quiz') {
    return (
      <Quiz
        key={session.id}
        deck={session.deck}
        catalog={verbs}
        onRestart={startSession}
        onExit={exitSession}
      />
    );
  }

  return (
    <section className='study-panel' aria-label='Study setup'>
      <h2 className='study-heading'>What do you want to practice?</h2>
      <ChoiceGroup
        legend='Mode'
        name='study-mode'
        choices={MODES}
        value={mode}
        onChange={setMode}
      />
      <ChoiceGroup
        legend='Deck'
        name='study-deck'
        choices={deckChoices}
        value={deckType}
        onChange={setDeckType}
      />
      <ChoiceGroup
        legend='Length'
        name='study-length'
        choices={LENGTHS}
        value={length}
        onChange={setLength}
      />
      <p className='study-hint'>
        {mode === 'quiz'
          ? `${sessionSize} questions, four options each.`
          : `${sessionSize} cards. Flip each one and mark what you know; cards you miss come back.`}
      </p>
      <div className='study-actions'>
        <button type='button' className='study-button' onClick={startSession}>
          Start
        </button>
      </div>
    </section>
  );
};

StudyMode.propTypes = {
  verbs: PropTypes.arrayOf(verbShape).isRequired,
  favoriteIds: PropTypes.instanceOf(Set).isRequired,
};

export default StudyMode;
