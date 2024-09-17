import React from 'react';
import styles from '../styles/Services.module.css';
import Emergency from '../assets/Emergency.jpg';
import GenralMedicine from '../assets/GenralMedicine.jpg';
import Surgery from '../assets/Surgery.jpg';
import Pediatrics from '../assets/Pediatrics.jpg';
import Dentist from '../assets/Dentist.jpg';

const servicesData = [
  {
    id: 1,
    title: 'Emergency Care',
    description: '24/7 emergency care with experienced professionals ready to handle critical situations.',
    icon: Emergency 
  },
  {
    id: 2,
    title: 'General Medicine',
    description: 'Comprehensive general medicine services for all ages with a focus on preventative care.',
    icon: GenralMedicine
  },
  {
    id: 3,
    title: 'Surgery',
    description: 'Advanced surgical procedures with state-of-the-art technology and skilled surgeons.',
    icon: Surgery
  },
  {
    id: 4,
    title: 'Pediatrics',
    description: 'Specialized pediatric care for children with a child-friendly environment and expert care.',
    icon: Pediatrics
  },
  {
    id: 5,
    title: 'Dentist',
    description: 'The complete dental care to keep your smile happy.',
    icon: Dentist
  }
];

function Services() {
  return (
    <section className={styles.services}>
      <h2>Our Services</h2>
      <p className={styles.subtitle}>We offer complete healthcare solutions for individuals with diverse health concerns.</p>
      <div className={styles.serviceList}>
        {servicesData.map(service => (
          <div key={service.id} className={styles.serviceItem}>
            <img src={service.icon} alt={service.title} className={styles.icon} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
