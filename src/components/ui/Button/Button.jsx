import styles from './Button.module.css'

const Button = ({
  children,
  variant = 'primary', // primary | secondary | outline | ghost
  size = 'md', // sm | md | lg
  type = 'button',
  disabled = false,
  onClick,
  ...rest
}) => {
  return (
    <button 
      className={`${styles.button} ${styles[variant]} ${styles[size]} ${disabled ? styles.disabled : ' '}`}
      type={type}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;