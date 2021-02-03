import React from 'react';
import { projects } from '../../data/projects';
import { nanoid } from 'nanoid';
import Project from './Project';

const Projects: React.FC = () => {
  return (
    <>
      {projects.map((project) => (
        <Project key={nanoid()} project={project} />
      ))}
    </>
  );
};

export default Projects;
