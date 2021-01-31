import React from 'react';
import styles from './Project.module.scss';
import { nanoid } from 'nanoid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type ProjectObj = {
  name: string;
  description: string;
  url: string;
  github: string;
  backgroundImg: number;
};

interface IProject {
  key: string;
  project: ProjectObj;
}

const Project: React.FC<IProject> = ({ project }) => {
  const { name, description, url, github, backgroundImg } = project;
  const style = `${styles.Project} ${styles['background' + backgroundImg]}`;

  return (
    <article className={style} key={nanoid()}>
      <div className={styles.content}>
        <h3>{name}</h3>
        <p>{description}</p>
        <div className={styles.icons}>
          <a href={url} rel="noreferrer" target="_blank">
            <FontAwesomeIcon className={styles.icon} icon={['fas', 'eye']} />
          </a>
          <a href={github} rel="noreferrer" target="_blank">
            <FontAwesomeIcon className={styles.icon} icon={['fab', 'github']} />
          </a>
        </div>
      </div>
    </article>
  );
};

export default Project;
