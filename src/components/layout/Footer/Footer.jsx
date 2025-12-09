import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.fContainer}>

        {/* Main Footer Content */}
        <div className={styles.top}>
          <div className={styles.logoSection}>
            <img
              alt="Simply Medical Healthcare"
              className={styles.logo}
            />
            <h3 className={styles.name}>Simply Medical Healthcare</h3>
          </div>

          <div className={styles.contact}>
            <p className={styles.phone}>
              <a href='tel:+19035551234'>1 (903) 869-1405</a>
            </p>
            <p className={styles.email}>
              <a href='mailto:ArielWilliams@SimplyMedicalHealthcarePLLC.onmicrosoft.com'>ArielWilliams@SimplyMedicalHealthcarePLLC.onmicrosoft.com</a>
            </p>
            <p className={styles.address}>
              Based in Corsicana, TX<br />
              Serving Corsicana, and Surrounding Areas 
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            Â© {new Date().getFullYear()} Simply Medical Healthcare. All rights reserved.
          </p>

          <div className={styles.quickLinks}>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#reviews">Reviews</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

