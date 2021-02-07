import React, { forwardRef } from 'react';
import styles from './Projects.module.scss';
import { projects } from '../../../data/projects';
import { nanoid } from 'nanoid';
import Project from '../Project';

const Projects = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref} className={styles.Projects}>
      {projects.map((project) => (
        <Project key={nanoid()} project={project} />
      ))}
    </div>
  );
});

export default Projects;
