import styles from './Contact.module.css';
import Button from '../../ui/Button/Button';

const emailAddress = ''

const Contact = () => {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>
          Get in Touch
        </h2>

        <div className={styles.grid}>
          {/* Phone */}
          <a href="tel:+19038691405" className={styles.card}>
            <span className={styles.icon}>Phone</span>
            <p className={styles.label}>Call or Text</p>
            <p className={styles.info}>(903) 869-1405</p>
          </a>

          {/* Email */}
          <a href='mailto:ArielWilliams@SimplyMedicalHealthcarePLLC.onmicrosoft.com' className={styles.card}>
            <span className={styles.icon}>Email</span>
            <p className={styles.label}>Email Us</p>
            <p className={styles.info}>Simply Medical</p>
          </a>

          {/* Address */}
          <div className={styles.card}>
            <span className={styles.icon}>Map</span>
            <p className={styles.label}>Service Area</p>
            <iframe
              title="50-Mile Service Area – Corsicana, TX"
              className={styles.embeddedMap}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108549.597!2d-96.4692!3d32.0954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDA1JzQzLjQiTiA5NsKwMjgnMDkuMiJX!5e0!3m2!1sen!2sus!4v1730000000000!5m2!1sen!2sus"
            />
            <p className={styles.info}>
              Based in Corsicana, TX<br />
              Serving Corsicana, and Surrounding Areas
            </p>
          </div>
        </div>

       {!" <div className={styles.cta}>"}
          {!"<Button variant=   size=  >"}
            {!"Call Now: (903) 869-1405"}
          {!"</Button>"}
        {!"</div>"}
      </div>
    </section>
  );
};

export default Contact;
