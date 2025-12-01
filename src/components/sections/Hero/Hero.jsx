import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>

        {/* Karla's Photo */}
        <div className={styles.imageWrapper}>
          <img
            src="/hero.jpg"
            alt="Karla Morrow, FNP"
            className={styles.photo}
          />
        </div>

        {/* Text + Embedded Map */}
        <div className={styles.content}>
          <h1 className={styles.h1}>
            Karla Morrow, FNP-BC
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
              title="50-Mile Service Area – Corsicana, TX"
              className={styles.embeddedMap}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108549.597!2d-96.4692!3d32.0954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDA1JzQzLjQiTiA5NsKwMjgnMDkuMiJX!5e0!3m2!1sen!2sus!4v1730000000000!5m2!1sen!2sus"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

