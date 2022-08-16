import css from './Buttons.module.css';
import Button from 'components/Button/Button';
import PropTypes from 'prop-types';

const ButtonsSet = ({ incGood, incNeutral, incBad }) => {
  return (
    <div className={css.buttons}>
      <Button name="good" action={incGood} />
      <Button name="neutral" action={incNeutral} />
      <Button name="bad" action={incBad} />
    </div>
  );
};

ButtonsSet.propTypes = {
  incGood: PropTypes.func.isRequired,
  incNeutral: PropTypes.func.isRequired,
  incBad: PropTypes.func.isRequired,
};

export default ButtonsSet;
