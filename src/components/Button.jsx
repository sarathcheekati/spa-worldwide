import styles from "./Button.module.css";

const Button = ({ children, onClick, type }) => {
  console.log(type);
  return (
    <button
      onClick={onClick}
      className={`${styles.btn} ${styles[type]}`}
      type="button"
    >
      {children}
    </button>
  );
};

export default Button;
