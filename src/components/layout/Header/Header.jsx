
import styles from './Header.module.css';
import Button from '../../ui/Button/Button';

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
      <div className={styles.siteNav}>
        <Button variant='primary' size='md'>Contact</Button>
        <Button variant='primary' size='md'>Services</Button>
        <Button variant='primary' size='md'>About</Button>
        <Button variant='primary' size='md'>Reviews</Button>
      </div>
    </header>  
  )
}

