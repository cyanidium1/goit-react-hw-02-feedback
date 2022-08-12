import css from './Stats.module.css';

const Stats = ({ props }) => {
  if (!props.total) {
    return <p>No stats</p>;
  }

  return (
    <>
      <p>Good: {props.good}</p>
      <p>Neutral: {props.neutral}</p>
      <p>Bad: {props.bad}</p>
      <p>Total: {props.total}</p>
      <p>Percents: {props.average}</p>
    </>
  );
};

export default Stats;
