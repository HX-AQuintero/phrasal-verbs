import PropTypes from 'prop-types';

const StarIcon = ({ filled, className }) => (
  <svg
    className={className}
    viewBox='0 0 24 24'
    aria-hidden='true'
    fill={filled ? 'currentColor' : 'none'}
    stroke='currentColor'
    strokeWidth='2'
    strokeLinejoin='round'
  >
    <path d='M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.8 6.8 19.6l1-5.8-4.3-4.1 5.9-.9L12 3.5z' />
  </svg>
);

StarIcon.propTypes = {
  filled: PropTypes.bool,
  className: PropTypes.string,
};

export default StarIcon;
