import React from 'react';
import styles from './Ed.module.scss';

const Ed: React.FC = () => {
  return (
    <div className={styles.Ed}>
      <article className={styles.aboutMe}>
        <h2>👋 Hi, I&apos;m Ed</h2>
        <h3>I&apos;m an Oxford based musician turned software developer.</h3>
        <p>
          Moving from a musicial language to programming languages matched my passion for creating something fresh,
          beautiful and meaningful from a blank canvas.
        </p>
        <p>Please have a look through my projects, download my CV and feel free to get in touch.</p>
      </article>
    </div>
  );
};

export default Ed;
