import styles from './Services.module.css';

const Services = () => {
  const services = [
    'Acute Care',
    'Chronic Disease Management',
    'Medication Management',
    'Medicare Physical',
    'Dementia Care (Mental & Physical)',
    'Palliative Care',
    'Well Child Physicals',
    'Transitional Care',
    'Sports Physicals',
    'Weight Loss Management',
    'Sutures & Wound Care',
    'Preventive Care',
    'Specialist Referrals',
    'Incision & Drainage',
    'IV Fluids & Medications',
    'Lab Draws & Blood Work',
    'EKG & Diagnostic Testing',
  ];

  return (
    <section id="services" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>
          Services, Conditions
          <br />
          <span className={styles.highlight}>and Procedures</span>
        </h2>

        <div className={styles.columns}>
          <ul className={styles.list}>
            {services.slice(0, Math.ceil(services.length / 2)).map((service, i) => (
              <li key={i} className={styles.item}>
                <span className={styles.check}>✓</span>
                {service}
              </li>
            ))}
          </ul>

          <ul className={styles.list}>
            {services.slice(Math.ceil(services.length / 2)).map((service, i) => (
              <li key={i} className={styles.item}>
                <span className={styles.check}>✓</span>
                {service}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
