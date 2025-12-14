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
            <li className={styles.navLinkA}><a href="#about">About</a></li>
            <li className={styles.navLink}><a href="#services">Services</a></li>
            <li className={styles.navLink}><a href="#reviews">Reviews</a></li>
            <li className={styles.navLink}><a href="#contact">Contact</a></li>
          </ul>  
        </nav>
        
    </div>
  );
};

export default Hamburger;