import css from './Feedback.module.css';
import Stats from 'components/Stats/Stats';
import ButtonsSet from 'components/ButtonsSet/ButtonsSet';
// import Section from 'components/Section/Section';
import PropTypes from 'prop-types';

const Feedback = ({ incGood, incNeutral, incBad, good, neutral, bad }) => {
  return (
    <div className={css.container}>
      <h2>Okay, leave feedback</h2>
      <ButtonsSet incGood={incGood} incNeutral={incNeutral} incBad={incBad} />
      <h2>Stats</h2>
      <Stats good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

Feedback.propTypes = {
  incGood: PropTypes.func,
  incNeutral: PropTypes.func,
  incBad: PropTypes.func,
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
};

export default Feedback;
