import css from './Stats.module.css';
import PropTypes from 'prop-types';

const Stats = ({ props }) => {
  if (!props.good && !props.neutral && !props.bad) {
    return <p>No stats</p>;
  }

  const { good, neutral, bad } = props;

  function countTotalFeedback() {
    return good + neutral + bad;
  }

  function countPositiveFeedbackPercentage() {
    const t = countTotalFeedback();
    return Math.round((good * 100 + neutral * 50) / t);
  }

  return (
    <div className={css.list}>
      <p className={css.item}>Good: {good}</p>
      <p className={css.item}>Neutral: {neutral}</p>
      <p className={css.item}>Bad: {bad}</p>
      <p className={css.item}>Total: {countTotalFeedback()}</p>
      <p className={css.item}>Percents: {countPositiveFeedbackPercentage()}</p>
    </div>
  );
};

Stats.propTypes = {
  props: PropTypes.objectOf(PropTypes.number),
};

export default Stats;
