import styles from './Hamburger.module.css';

const Hamburger = ({ isOpen, onClick }) => {
  return (
    <div className={styles.hamburgerWrapper}>

      <nav 
          className={isOpen ? `${styles.opened} ${styles.closed}` : styles.closed}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
        <ul className={styles.navBurgerList}>
          <li className={styles.navLinkS}><a href="#about">About</a></li>
          <li className={styles.navLinkS}><a href="#services">Services</a></li>
          <li className={styles.navLinkS}><a href="#reviews">Reviews</a></li>
          <li className={styles.navLinkS}><a href="#contact">Contact</a></li>
        </ul>  
      </nav>
      
      <button
        className={isOpen ? `${styles.open} ${styles.close}` : styles.close}
        onClick={onClick}
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
        type="button"
      >
        <div className={styles.xWrapper}>
          <span className={styles.line}></span>
          <span className={styles.line}></span>
          <span className={styles.line}></span>
        </div>
      </button>
        
    </div>
  );
};

export default Hamburger;