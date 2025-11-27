import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>

        {/* Karla's Photo */}
        <div className={styles.imageWrapper}>
          <img
            src="/src/assets/images/karla_rodney_croped.jpg"
            alt="Karla Rodriguez, ARNP"
            className={styles.photo}
          />
        </div>

        {/* Text + Embedded Map */}
        <div className={styles.content}>
          <h1 className={styles.h1}>
            Karla Marrow, ARNP
          </h1>
          <h2 className={styles.h2}>Family Nurse Practitioner</h2>

          <p className={styles.address}>
            Serving Corsicana and Surrounding Areas<br />
            <strong>House calls • Same-day visits • No waiting rooms</strong>
            <strong> </strong>
          </p>

          {/* Embedded Map with Red Circle */}
          <div className={styles.mapWrapper}>
            <iframe
              title="Service Area – Navarro County & Surrounding"
              className={styles.embeddedMap}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108549.597!2d-96.4692!3d32.0954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c1e9c7b7e7b7b%3A0x8f8e8f8e8f8e8f8e!2sCorsicana%2C%20TX!5e0!3m2!1sen!2sus!4v1717000000000!5m2!1sen!2sus&entry=ttu&z=10&layer=c&cbll=32.0954,-96.4692&cbp=12,0,,0,0"
            >
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

