import React, { useState } from 'react';
import styles from './Services.module.css';
import Card from '../../ui/Card/Card';

const Services = () => {
 
  const services = [
    {id: 1, title: 'Acute Care', description: 'Short-term medical treatment for severe injuries, sudden illnesses, or urgent health conditions that require immediate attention.'},
    {id: 2, title: 'Chronic Disease Management', description: 'Systematic approach to healthcare that helps individuals manage long-term health conditions effectively, improving their quality of life and health outcomes.'},
    {id: 3, title: 'Medication Management', description: 'Systematic process of organizing and overseeing all aspects of a persons medication regimen to ensure its effectiveness and safety.'},
    {id: 4, title: 'Medicare Physical', description: 'One-time preventive visit available within the first 12 months of enrolling in Medicare Part B.'},
    {id: 5, title: 'Dementia Care (Mental & Physical)', description: 'Specialized support and services designed to assist individuals living with dementia, helping them maintain their quality of life and manage daily challenges associated with the condition.'},
    {id: 6, title: 'Palliative Care', description: 'Specialized form of care that provides symptom relief, comfort and support to people living with serious or chronic illnesses.'},
    {id: 7, title: 'Well Child Physicals', description: 'Children who attend their regular Well Child and physical appointments experience reduced hospitalizations and emergency room visits, something all parents can appreciate.'},
    {id: 8, title: 'Transitional Care', description: 'healthcare service designed to support patients as they move from one care setting to another, particularly from a hospital to home or another facility.'},
    {id: 9, title: 'Sports Physicals', description: 'A sports physical, also known as a pre-participation physical examination (PPE), is a medical check-up designed to assess an individuals overall health and fitness levels before participating in sports.'},
    {id: 10, title: 'Weight Loss Management', description: 'Structured, evidence-based approach that helps individuals achieve and maintain a healthy weight loss through a combination of personalized strategies.'},
    {id: 11, title: 'Sutures & Wound Care', description: 'The comprehensive management of wounds and sutures, which includes cleaning, monitoring, and promoting healing in injuries to the skin and underlying structures.'},
    {id: 12, title: 'Preventive Care', description: 'Preventive care services aimed at preventing illnesses, detecting potential health issues early, and maintaining overall well-being in injuries to the skin and underlying structures.'},
    {id: 13, title: 'Specialist Referrals', description: 'Specialist referrals and recommendations for healthcare providers or specialist in a specific area of medicine.'},
    {id: 14, title: 'Incision & Drainage', description: 'Incision and drainage (I&D), is used to treat localized soft tissue infections, such as abscesses. The I&D procedure involves making a small surgical incision to allow the infected fluid to escape, relieving pressure and facilitating healing.'},
    {id: 15, title: 'IV Fluids & Medications', description: ''},
    {id: 16, title: 'Lab Draws & Blood Work', description: ''},
    {id: 17, title: 'EKG & Diagnostic Testing', description: 'An EKG (electrocardiogram) is a non-invasive test that measures the heart\'s electrical activity, helping to diagnose various heart conditions.'}
  ]

  const [alertDescription, setAlertDescription] = useState("");
  const [alertTitle, setAlertTitle] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleClick = (description, title) => {
    setAlertDescription(description);
    setAlertTitle(title);
    setShowAlert(true);
    // Auto-hide after 7 seconds
    setTimeout(() => setShowAlert(false), 7000);
  };


  return (
    <section id="services" className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.heading}>
          Services, Conditions
          <br />
          <span className={styles.highlight}>and Procedures</span>
        </h2>

        <div className={styles.columns}>
          <ul className={styles.list}>
            {services.slice(0, Math.ceil(services.length / 2)).map((service) => (
              <li key={service.id} 
                  className={styles.item} 
                  onClick={() => handleClick(service.description, service.title)}    
              >
                <span className={styles.check}>✓</span>
                {service.title}
              </li>             
            ))}
          </ul>
          {showAlert && (
            <Card className={styles.custom_alert}>
              <h3>{alertTitle}</h3>
              <p>{alertDescription}</p>
            </Card>
          )}
          <ul className={styles.list}>
            {services.slice(Math.ceil(services.length / 2)).map((service) => (
              <li key={service.id} 
                  className={styles.item}
                  onClick={() => handleClick(service.description, service.title)}
              >
                <span className={styles.check}>✓</span>
                {service.title}
              </li>
            ))}
          </ul>
          {showAlert && (
            <Card className={styles.custom_alert}>
              <h3>{alertTitle}</h3>
              <p>{alertDescription}</p>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};

export default Services;
