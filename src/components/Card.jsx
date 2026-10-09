import { useId, useState } from 'react';
import PropTypes from 'prop-types';
import SpeakButton from './SpeakButton';
import StarIcon from './StarIcon';
import './Card.css';

const COLOR_COUNT = 6;

const Card = ({
  title,
  meaning,
  example,
  colorIndex,
  isFavorite,
  onToggleFavorite,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const bodyId = useId();

  return (
    <div className={`card card--color-${colorIndex % COLOR_COUNT}`}>
      <button
        type='button'
        className='card-toggle'
        aria-expanded={isOpen}
        aria-controls={bodyId}
        onClick={() => setIsOpen((open) => !open)}
      >
        {title}
      </button>
      <button
        type='button'
        className='card-favorite'
        aria-pressed={isFavorite}
        aria-label={
          isFavorite
            ? `Remove ${title} from favorites`
            : `Add ${title} to favorites`
        }
        onClick={onToggleFavorite}
      >
        <StarIcon filled={isFavorite} className='card-favorite-icon' />
      </button>
      {isOpen && (
        <div className='card-body' id={bodyId}>
          <p className='card-meaning'>{meaning}</p>
          <p className='card-example'>{example}</p>
          <div className='card-actions'>
            <SpeakButton text={`${title}. ${example}`} />
          </div>
        </div>
      )}
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  meaning: PropTypes.string.isRequired,
  example: PropTypes.string.isRequired,
  colorIndex: PropTypes.number.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  onToggleFavorite: PropTypes.func.isRequired,
};

export default Card;
