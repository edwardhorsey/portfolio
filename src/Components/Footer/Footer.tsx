import React from 'react';
import styles from './Footer.module.scss';

const Footer: React.FC = () => {
  const theDate = new Date();

  return (
    <footer className={styles.Footer}>
      <p>Copyright © Edward Horsey {theDate.getFullYear()}</p>
    </footer>
  );
};

export default Footer;
