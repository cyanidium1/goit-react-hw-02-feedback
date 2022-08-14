import Button from 'components/Button/Button';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = props => {
  console.log(props.good);
  return (
    <>
      <h2>Okay, leave feedback</h2>
      <div className={css.buttons}>
        <Button name="good" onClick={props.good} />
        {/* <Button name="neutral" onClick={neutral} />
        <Button name="bad" onClick={bad} /> */}
      </div>
    </>
  );
};

export default FeedbackOptions;
