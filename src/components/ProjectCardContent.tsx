import React from 'react';
import { Project } from '../data/projects';
import ProjectLink from './ProjectLink';
import ProjectTechTag from './ProjectTechTag';

const ProjectCardContent = ({ project }: { project: Project }): JSX.Element => {
    return (
        <>
            <h3 className="text-2xl font-bold drop-shadow-md-black">{project.name}</h3>
            <p className="text-lg xl:text-xl mt-2 drop-shadow-md-black">{project.description}</p>
            <div className="flex flex-wrap gap-x-2 gap-y-2 mt-3 z-20">
                {project.tech.map((item) => (
                    <ProjectTechTag key={`${project.name}.${item}`} name={item} />
                ))}
            </div>
            <div className="flex flex-wrap gap-x-2 gap-y-2 mt-5 z-20">
                {project.url.length > 0 && <ProjectLink text="View" url={project.url} />}
                {project.github.length > 0 && <ProjectLink text="Source code" url={project.github} />}
            </div>
        </>
    );
};

export default ProjectCardContent;
