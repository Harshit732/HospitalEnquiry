import React from 'react';
import styles from '../styles/Footer.module.css';

function Footer() {
  return (
    <div>
        <footer className={styles.footer}>
      <h2>Contact Info</h2>
      <p>If you have any questions or need to reach out, feel free to contact us:</p>
      <div className={styles.contactDetails}>
        <p><strong>Phone:</strong> +91 9000000000 &nbsp;</p>
        <p><strong>Email:</strong> xyz@hospital.com &nbsp;</p>
        <p><strong>Address:</strong> 123 abc, xyz</p>
      </div>
    </footer>
    </div>
  );
}

export default Footer;
