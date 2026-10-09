import PropTypes from 'prop-types';

const SessionSummary = ({ title, stats, onRestart, onExit, children }) => (
  <section className='study-panel study-summary' aria-live='polite'>
    <h2 className='study-heading'>{title}</h2>
    <p className='study-stats'>{stats}</p>
    {children}
    <div className='study-actions'>
      <button type='button' className='study-button' onClick={onRestart}>
        Study again
      </button>
      <button
        type='button'
        className='study-button study-button--secondary'
        onClick={onExit}
      >
        Change setup
      </button>
    </div>
  </section>
);

SessionSummary.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.string.isRequired,
  onRestart: PropTypes.func.isRequired,
  onExit: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default SessionSummary;
