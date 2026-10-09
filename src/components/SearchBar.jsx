import PropTypes from 'prop-types';
import StarIcon from './StarIcon';
import './SearchBar.css';

const OPTION_LABELS = [
  { key: 'meaning', label: 'Meaning' },
  { key: 'example', label: 'Examples' },
];

const SearchBar = ({
  value,
  onChange,
  options,
  onOptionsChange,
  resultCount,
  showOnlyFavorites,
  onToggleFavorites,
  favoritesCount,
}) => (
  <div className='search-bar'>
    <div className='search-row'>
      <input
        type='search'
        className='search-input'
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder='Search phrasal verbs…'
        aria-label='Search phrasal verbs'
        autoComplete='off'
        enterKeyHint='search'
      />
      <button
        type='button'
        className='favorites-filter'
        aria-pressed={showOnlyFavorites}
        aria-label={`Show only favorites (${favoritesCount})`}
        onClick={onToggleFavorites}
      >
        <StarIcon filled={showOnlyFavorites} className='favorites-filter-icon' />
        <span className='favorites-filter-count'>{favoritesCount}</span>
      </button>
    </div>
    <div className='search-meta'>
      <fieldset className='search-options'>
        <legend className='search-options-legend'>Also search in</legend>
        {OPTION_LABELS.map(({ key, label }) => (
          <label key={key} className='search-option'>
            <input
              type='checkbox'
              checked={options[key]}
              onChange={(event) =>
                onOptionsChange({ ...options, [key]: event.target.checked })
              }
            />
            {label}
          </label>
        ))}
      </fieldset>
      <p className='search-count' role='status'>
        {resultCount} {resultCount === 1 ? 'result' : 'results'}
      </p>
    </div>
  </div>
);

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.shape({
    meaning: PropTypes.bool.isRequired,
    example: PropTypes.bool.isRequired,
  }).isRequired,
  onOptionsChange: PropTypes.func.isRequired,
  resultCount: PropTypes.number.isRequired,
  showOnlyFavorites: PropTypes.bool.isRequired,
  onToggleFavorites: PropTypes.func.isRequired,
  favoritesCount: PropTypes.number.isRequired,
};

export default SearchBar;
