import React, { forwardRef } from 'react';
import styles from './Skills.module.scss';
import { skills } from '../../../data/projects';
import { nanoid } from 'nanoid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import firebase from '../../../images/firebase.webp';
import typescript from '../../../images/ts.webp';

const Skills = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <article ref={ref} className={styles.Skills}>
      <div className={styles.contentBox}>
      <h2>What I do</h2>
      <ul className={styles.skillsList}>
        {skills.map(({ text, iconCode }) => (
          <li key={nanoid()}>
            <span>{text}</span>
            <FontAwesomeIcon className={styles.skillIcon} icon={iconCode} />
          </li>
        ))}
        <li>
          <span>Firebase</span>
          <img className={`${styles.skillIcon} ${styles.skillIconImg}`} src={firebase} alt="Firebase Logo" />
        </li>
        <li>
          <span>Typescript</span>
          <img className={`${styles.skillIcon} ${styles.skillIconImg}`} src={typescript} alt="TypeScript logo" />
        </li>
      </ul>
      </div>

      <div className={styles.contentBox}>
      <h2>Get in touch 👇</h2>
      <p className={styles.sentence}>
        After working as a professional musician since leaving University, I decided to pursue a 12-week intensive
        software development bootcamp at _nology. The course fuelled my passion for learning new technologies and
        logical problem solving and helped me launch a new career in software development.
      </p>
      <p>Feel free to get in touch 📇</p>
      <ul className={styles.contactList}>
        {/* <li>
          <a href="" target="_blank" rel="noreferrer" >
            <FontAwesomeIcon className={styles.contactIcon} icon={['fas', 'download']} />
          </a>
        </li> */}
        <li>
          <a href="mailto:edwardhorsey@me.com" target="_blank" rel="noreferrer" >
            <FontAwesomeIcon className={styles.contactIcon} icon={['fas', 'at']} />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/edward-horsey-5a69151a1/" target="_blank" rel="noreferrer" >
            <FontAwesomeIcon className={styles.contactIcon} icon={['fab', 'linkedin']} />
          </a>
        </li>
        <li>
          <a href="https://www.github.com/edwardhorsey" target="_blank" rel="noreferrer" >
            <FontAwesomeIcon className={styles.contactIcon} icon={['fab', 'github']} />
          </a>
        </li>
      </ul>
      </div>
    </article>
  );
});

export default Skills;
