import PropTypes from 'prop-types';

/** PropTypes shape of a phrasal verb entry. */
export const verbShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  meaning: PropTypes.string.isRequired,
  example: PropTypes.string.isRequired,
});
