import PropTypes from 'prop-types';
import './LetterNav.css';

const LetterNav = ({ letters, availableLetters, onSelect }) => (
  <nav className='letter-nav' aria-label='Jump to letter'>
    {letters.map((letter) => (
      <button
        key={letter}
        type='button'
        className='letter-button'
        disabled={!availableLetters.has(letter)}
        onClick={() => onSelect(letter)}
      >
        {letter}
      </button>
    ))}
  </nav>
);

LetterNav.propTypes = {
  letters: PropTypes.arrayOf(PropTypes.string).isRequired,
  availableLetters: PropTypes.instanceOf(Set).isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default LetterNav;
