
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <img 
        src='\logo-transparent.png'
        alt='Company Logo' 
        className={styles.logo}     
      />
      <script type='text/javascript' src='https://www.rapidscansecure.com/siteseal/siteseal.js?code=199,A2B7CB9CADAC45044CF632A4D47EDB9D59A9631B'></script>
      <h1 className={styles.companyName}>
          Simply Medical Healthcare, PLLC
      </h1>
      <nav className={styles.nav}>
        <a href='#contact' className={styles.navLink}>Contact</a>
        <a href='#about' className={styles.navLink}>About</a>
        <a href='#services' className={styles.navLink}>Services</a>
        <a href='#reviews' className={styles.navLink}>Reviews</a>
      </nav>
    </header>  
  )
}

