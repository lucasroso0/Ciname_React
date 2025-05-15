import styles from  './button.module.css';

export default function Button({ children, onClick, type = 'button' }) {
  return (
    <button className={styles.button} onClick={onClick} type={type}>
      {children}
    </button>
  );
}
