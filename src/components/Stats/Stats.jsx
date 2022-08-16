import css from './Stats.module.css';
import PropTypes from 'prop-types';

const Stats = ({ good, neutral, bad }) => {
  if (!good && !neutral && !bad) {
    return <p>No stats</p>;
  }

  function total() {
    return good + neutral + bad;
  }

  function average() {
    const t = total();
    return Math.round((good * 100 + neutral * 50) / t);
  }

  return (
    <div className={css.list}>
      <p className={css.item}>Good: {good}</p>
      <p className={css.item}>Neutral: {neutral}</p>
      <p className={css.item}>Bad: {bad}</p>
      <p className={css.item}>Total: {total()}</p>
      <p className={css.item}>Percents: {average()}</p>
    </div>
  );
};

Stats.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
};

export default Stats;
