import PropTypes from 'prop-types';
import './ViewSwitch.css';

const VIEWS = [
  { key: 'browse', label: 'Browse' },
  { key: 'study', label: 'Study' },
];

const ViewSwitch = ({ view, onChange }) => (
  <nav className='view-switch' aria-label='Main sections'>
    {VIEWS.map(({ key, label }) => (
      <button
        key={key}
        type='button'
        className='view-switch-button'
        aria-current={view === key ? 'page' : undefined}
        onClick={() => onChange(key)}
      >
        {label}
      </button>
    ))}
  </nav>
);

ViewSwitch.propTypes = {
  view: PropTypes.oneOf(['browse', 'study']).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ViewSwitch;
