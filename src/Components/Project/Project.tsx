import React from 'react';
import styles from './Project.module.scss';
import { nanoid } from 'nanoid';

type ProjectObj = { name: string; description: string; url: string; github: string };

interface IProject {
  key: string;
  project: ProjectObj;
}

const Project: React.FC<IProject> = ({ project }) => {
  const { name, description, url, github } = project;

  return (
    <article className={styles.Project} key={nanoid()}>
      <p>{name}</p>
      <p>{description}</p>
      <p>{url}</p>
      <p>{github}</p>
    </article>
  );
};

export default Project;
