import React from 'react';
import styles from './Skills.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import firebase from '../../images/firebase.webp';
import typescript from '../../images/ts.webp';

const Skills: React.FC = () => {
  return (
    <article className={styles.Skills}>
      <h2>What I do</h2>
      <ul className={styles.skillsList}>
        <li>
          <span>HTML5</span>
          <FontAwesomeIcon className={styles.skillIcon} icon={['fab', 'html5']} />
        </li>
        <li>
          <span>Sass</span>
          <FontAwesomeIcon className={styles.skillIcon} icon={['fab', 'sass']} />
        </li>
        <li>
          <span>JavaScript</span>
          <FontAwesomeIcon className={styles.skillIcon} icon={['fab', 'js-square']} />
        </li>
        <li>
          <span>React</span>
          <FontAwesomeIcon className={styles.skillIcon} icon={['fab', 'react']} />
        </li>
        <li>
          <span>Python</span>
          <FontAwesomeIcon className={styles.skillIcon} icon={['fab', 'python']} />
        </li>
        <li>
          <span>Node.js</span>
          <FontAwesomeIcon className={styles.skillIcon} icon={['fab', 'node-js']} />
        </li>
        <li>
          <span>PHP</span>
          <FontAwesomeIcon className={styles.skillIcon} icon={['fab', 'php']} />
        </li>
        <li>
          <span>Git</span>
          <FontAwesomeIcon className={styles.skillIcon} icon={['fab', 'git-alt']} />
        </li>
        <li>
          <span>AWS</span>
          <FontAwesomeIcon className={styles.skillIcon} icon={['fab', 'aws']} />
        </li>
        <li>
          <span>Firebase</span>
          <img className={`${styles.skillIcon} ${styles.skillIconImg}`} src={firebase} />
        </li>
        <li>
          <span>Typescript</span>
          <img className={`${styles.skillIcon} ${styles.skillIconImg}`} src={typescript} />
        </li>
      </ul>
      <h2>Get in touch</h2>
    </article>
  );
};

export default Skills;
