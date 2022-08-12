import css from './Button.module.css';

const Button = ({ name, action }) => (
  <button onClick={action} className={css.btn}>
    {name}
  </button>
);

export default Button;
