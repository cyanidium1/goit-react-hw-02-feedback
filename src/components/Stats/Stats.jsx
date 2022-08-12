import css from './Stats.module.css';

const Stats = ({ props }) => {
  if (!props.total) {
    return <p>No stats</p>;
  }

  return (
    <div className={css.list}>
      <p className={css.item}>Good: {props.good}</p>
      <p className={css.item}>Neutral: {props.neutral}</p>
      <p className={css.item}>Bad: {props.bad}</p>
      <p className={css.item}>Total: {props.total}</p>
      <p className={css.item}>Percents: {props.average}</p>
    </div>
  );
};

export default Stats;
