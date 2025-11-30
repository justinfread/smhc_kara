import styles from './Contact.module.css';
import Button from '../../ui/Button/Button';

const Contact = () => {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>
          Get in Touch
        </h2>

        <div className={styles.grid}>
          {/* Phone */}
          <a href="tel:+19035551234" className={styles.card}>
            <span className={styles.icon}>Phone</span>
            <p className={styles.label}>Call or Text</p>
            <p className={styles.info}>(903) 555-1234</p>
          </a>

          {/* Email */}
          <a href="mailto:Karla Morrow<simplymedical2024@gmail.com>" className={styles.card}>
            <span className={styles.icon}>Email</span>
            <p className={styles.label}>Email Us</p>
            <p className={styles.info}>karla@simplymedical</p>
          </a>

          {/* Address */}
          <div className={styles.card}>
            <span className={styles.icon}>Map</span>
            <p className={styles.label}>Service Area</p>
            <p className={styles.info}>
              Based in Corsicana, TX<br />
              Serving Corsicana, and Surrounding Areas
            </p>
          </div>
        </div>

        <div className={styles.cta}>
          <Button variant="primary" size="xl">
            Call Now: (903) 555-1234
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
