import React, { RefObject } from 'react';
import styles from './Projects.module.scss';
import { projects } from '../../../data/projects';
import { nanoid } from 'nanoid';
import Project from '../Project';

interface IProjects {
  ref: RefObject<HTMLElement>;
}

const Projects: React.FC<IProjects> = () => {
  return (
    <div className={styles.Projects}>
      {projects.map((project) => (
        <Project key={nanoid()} project={project} />
      ))}
    </div>
  );
};

export default Projects;
