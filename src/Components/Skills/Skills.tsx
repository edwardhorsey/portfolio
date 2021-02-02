import React from 'react';
import styles from './Skills.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import firebase from '../../images/firebase.webp';
import typescript from '../../images/ts.webp';
import { skills } from '../../data/projects';

const Skills: React.FC = () => {
  return (
    <article className={styles.Skills}>
      <h2>What I do</h2>
      <ul className={styles.skillsList}>
        {skills.map(({ text, iconCode }) => (
          <li>
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
      <h2>Get in touch 👇</h2>
      <ul className={styles.contactList}>
        <li>
          <a href="" target="_blank" rel="noreferrer" >
            <FontAwesomeIcon className={styles.contactIcon} icon={['fas', 'download']} />
          </a>
        </li>
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
    </article>
  );
};

export default Skills;
