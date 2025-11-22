
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <img 
        src='\logo-transparent.png'
        alt='Company Logo' 
        className={styles.logo}     
      />
      <h3 className={styles.companyName}>
          Simply Medical Healthcare, PLLC
      </h3>
      <div className={styles.siteNav}>
        <button>Contact Button</button>
      </div>
    </header>  
  )
}

