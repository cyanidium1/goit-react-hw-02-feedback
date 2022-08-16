import css from './Buttons.module.css';
import Button from 'components/Button/Button';

const ButtonsSet = ({ incGood, incNeutral, incBad }) => {
  return (
    <div className={css.buttons}>
      <Button name="good" action={incGood} />
      <Button name="neutral" action={incNeutral} />
      <Button name="bad" action={incBad} />
    </div>
  );
};

export default ButtonsSet;
