import { useState } from 'react';
import PropTypes from 'prop-types';
import { buildQuiz } from '../../utils/quiz';
import SessionSummary from './SessionSummary';
import { verbShape } from './verbShape';

const Quiz = ({ deck, catalog, onRestart, onExit }) => {
  const [questions] = useState(() => buildQuiz(deck, catalog));
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [missed, setMissed] = useState([]);

  const question = questions[index];

  const choose = (option) => {
    if (selected !== null) return;
    setSelected(option);
    if (option === question.answer) setScore((value) => value + 1);
    else setMissed((list) => [...list, question]);
  };

  const next = () => {
    setIndex((value) => value + 1);
    setSelected(null);
  };

  if (!question) {
    return (
      <SessionSummary
        title='Quiz complete'
        stats={`You got ${score} out of ${questions.length} right.`}
        onRestart={onRestart}
        onExit={onExit}
      >
        {missed.length > 0 && (
          <div className='study-missed'>
            <h3 className='study-subheading'>Review these</h3>
            <ul className='study-missed-list'>
              {missed.map(({ id, title, answer }) => (
                <li key={id}>
                  <strong>{title}</strong>: {answer}
                </li>
              ))}
            </ul>
          </div>
        )}
      </SessionSummary>
    );
  }

  const isAnswered = selected !== null;
  const isLast = index === questions.length - 1;

  const optionState = (option) => {
    if (!isAnswered) return '';
    if (option === question.answer) return 'is-correct';
    if (option === selected) return 'is-wrong';
    return '';
  };

  return (
    <section className='study-panel' aria-label='Quiz'>
      <div className='study-progress'>
        <progress
          className='study-progress-bar'
          value={index}
          max={questions.length}
        />
        <span className='study-progress-label'>
          {index + 1} / {questions.length}
        </span>
      </div>

      <div className='study-card'>
        <p className='study-card-title'>{question.title}</p>
        <p className='study-card-example'>{question.example}</p>
        <p className='study-prompt'>What does it mean here?</p>
      </div>

      <ul className='quiz-options'>
        {question.options.map((option) => (
          <li key={option}>
            <button
              type='button'
              className={`quiz-option ${optionState(option)}`}
              disabled={isAnswered}
              onClick={() => choose(option)}
            >
              {option}
              {isAnswered && option === question.answer && ' ✓'}
              {isAnswered && option === selected && option !== question.answer && ' ✗'}
            </button>
          </li>
        ))}
      </ul>

      <p className='quiz-feedback' role='status'>
        {isAnswered &&
          (selected === question.answer
            ? 'Correct!'
            : `Not quite. It means “${question.answer}”.`)}
      </p>

      {isAnswered && (
        <div className='study-actions'>
          <button type='button' className='study-button' onClick={next}>
            {isLast ? 'See results' : 'Next'}
          </button>
        </div>
      )}

      <button type='button' className='study-link' onClick={onExit}>
        End quiz
      </button>
    </section>
  );
};

Quiz.propTypes = {
  deck: PropTypes.arrayOf(verbShape).isRequired,
  catalog: PropTypes.arrayOf(verbShape).isRequired,
  onRestart: PropTypes.func.isRequired,
  onExit: PropTypes.func.isRequired,
};

export default Quiz;
