import { useState } from 'react';
import Button from '../../ui/Button/Button';
import styles from './About.module.css';

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className={styles.section}>
      <div className={styles.container}>

        <h1 className={styles.heading}>
          About Simply Medical Healthcare<br></br>House Calls for Primary Care 
        </h1>

        <p className={styles.intro}>
          Bringing compassionate, house-call care directly to your doorstep.
        </p>

        <div className={`${styles.textWrapper} ${isExpanded ? styles.expanded : ''}`}>
          <p className={styles.paragraph}>
            Simply Medical Healthcare provides primary care 
            through house calls or telemedicine for acute and 
            chronic care in your home or your workplace
            for pediatric, adult, and geriatric clients. 
            <br /><br />
            Transitional care management visits following a discharge 
            from a hospital, nursing home, psychiatric hospital, or other 
            health related admissions can assure that you have the medications 
            and specialist appointments that are ordered until you can be
            seen by your primary care provider. Palliative care visits can 
            optimize quality of life and mitigate suffering for clients with 
            serious, complex, and often terminal illnesses. Clients that are 
            unable to leave their home, due to illness, disability, or 
            transportation, can benefit from our services and not worry about 
            missing appointments or running out of medication. If you have a 
            PCP that is unable to see you quickly enough, then we can fill in 
            the gap and assure they receive records of your visit with us if 
            you desire for any type of visit. We can obtain labs, administer 
            IV therapy, give IM injections, order radiology, and follow-up 
            with you to assure you have the information that is needed for 
            your health and well-being. Dementia related care is another 
            avenue that can be beneficial to families and the client in 
            maintaining their psychological and physical status. 
            We cover a 20 mile radius for in home and telemedicine medical care and 
            outside the 20 mile radius will be limited to telemedicine. 
          </p>

          {/* Fade overlay when collapsed */}
          {!isExpanded && <div className={styles.fade}></div>}
        </div>
        <div className={styles.moreAbout}>
          <br></br><p>Specialty: Nurse Practitioner</p> <p>NPI Number: 1093708448</p>
        </div>

        <div className={styles.buttonWrapper}>
          <Button
            variant="primary"
            size="lg"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? 'Read Less' : 'Read More'}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;
