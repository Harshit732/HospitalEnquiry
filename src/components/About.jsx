import React from 'react';
import styles from '../styles/About.module.css';

function About() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>About Us</h1>
        <hr />
      </header>

      <section className={styles.content}>
        <h2>Welcome to Our Hospital</h2>
        <p>
          At Hospital, we are committed to providing exceptional medical care to our community. Our team of dedicated professionals ensures you receive the best treatment in a comfortable and caring environment.
        </p>
      </section>

      <section className={styles.mission}>
        <h2>Our Mission</h2>
        <p>
          Our mission is to deliver world-class healthcare with compassion and dignity. We aim to promote well-being and healthier lifestyles through patient-centered care, cutting-edge technology, and innovative treatments.
        </p>
      </section>

      <section className={styles.values}>
        <h2>Our Values</h2>
        <ul className={styles.valuesList}>
          <li>Compassionate Care</li>
          <li>Patient-Centered Approach</li>
          <li>Cutting-Edge Medical Technologies</li>
          <li>Community Outreach & Education</li>
        </ul>
      </section>

      
    </div>
  );
}

export default About;
