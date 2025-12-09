import styles from './Hamburger.module.css';

const Hamburger = ({ isOpen, onClick }) => {
  return (
    <div className={styles.hamburgerWrapper}>
      
      <button
        className={isOpen ? `${styles.open} ${styles.close}` : styles.close}
        onClick={onClick}
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
        type="button"
      >
        <span className={styles.line}></span>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
      </button>
      
      <nav 
          className={isOpen ? `${styles.opened} ${styles.closed}` : styles.closed}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          <ul className={styles.navBurgerList}>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#reviews">Reviews</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>  
        </nav>
        
    </div>
  );
};

export default Hamburger;