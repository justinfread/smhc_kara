import styles from './Footer.module.css'

export default function Footer() {
  return(
    <footer className={styles.footer}>
      <img 
        className={styles.logo} 
        src='\logo-transparent.png'
        alt="Company Logo">
      </img>
      <h1>I am a Footer</h1>
      <h2>One day I'll have links and contact information, maybe even adds</h2>
    </footer>
  )
}