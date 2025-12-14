import { useState } from 'react';
import Hamburger from '../../ui/Hamburger/Hamburger';
import styles from './Header.module.css';

const Header = () => {

  /** useState for Hamburger Navigation */
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      {/** Logo */}
      <div className={styles.logoWrapper}>
        <img
          alt="Simply Medical Healthcare logo"
          className={styles.logo}
        />
      </div>

      {/** Company name */}
      <div className={styles.titleWrapper}>
        <h1 className={styles.title}>Simply Medical Healthcare, PLLC</h1>
      </div>

      {/** Navigation: Desktop => 768px width */}
      <nav className={styles.navWrapper}>
        <ul className={styles.navList}>
          <li><a href="#about" className={styles.navLink}>About</a></li>
          <li><a href="#services" className={styles.navLink}>Services</a></li>
          <li><a href="#reviews" className={styles.navLink}>Reviews</a></li>
          <li><a href="#contact" className={styles.navLink}>Contact</a></li>
        </ul>
      </nav>
      
      {/** Hamburger only shows on mobile, top right */}
      <div className={styles.burger}>
        <Hamburger isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
      </div>

    </header>
  )
}

export default Header