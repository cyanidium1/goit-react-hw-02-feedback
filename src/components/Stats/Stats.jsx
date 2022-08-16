import css from './Stats.module.css';

const Stats = ({ props }) => {
  if (!props.good && !props.neutral && !props.bad) {
    return <p>No stats</p>;
  }

  const { good, neutral, bad } = props;

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

export default Stats;
