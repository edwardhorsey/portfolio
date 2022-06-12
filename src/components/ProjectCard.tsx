import { useState } from 'react';
import { animated, useSpring } from 'react-spring';
import { Project } from '../data/projects';
import useScreenType, { MOBILE } from '../hooks/useScreenType';
import ProjectLink from './ProjectLink';
import ProjectTechTag from './ProjectTechTag';

const ProjectCard = ({ project }: { project: Project }): JSX.Element => {
    const screenType = useScreenType();
    const isMobile = screenType === MOBILE;
    const [isActive, setIsActive] = useState(false);
    const cardSpring = useSpring({
        from: {
            opacity: 0,
        },
        to: {
            opacity: isMobile ? 1 : isActive ? 1 : 0,
        },
        config: { duration: 500 },
    });

    return (
        <animated.article
            className="w-full lg:w-[45%] min-h-[25rem] bg-center bg-cover text-white p-2"
            key={project.name}
            style={{
                backgroundImage: cardSpring.opacity.to((opacity) => {
                    const value = opacity * 0.6;

                    return `linear-gradient(rgba(0, 0, 0, ${value}), rgba(0, 0, 0, ${value})), url(${project.images[0]})`;
                }),
            }}
            onMouseEnter={!isMobile ? () => setIsActive(true) : undefined}
            onMouseLeave={!isMobile ? () => setIsActive(false) : undefined}
        >
            <animated.div style={{ opacity: cardSpring.opacity }} className="w-full h-full flex flex-col justify-end">
                <h1 style={{ filter: `drop-shadow(1px 1px 2px black)` }} className="text-2xl font-bold">
                    {project.name}
                </h1>
                <p style={{ filter: `drop-shadow(1px 1px 2px black)` }} className="text-lg xl:text-xl mt-2">
                    {project.description}
                </p>
                <div className="flex flex-wrap gap-x-2 gap-y-2 mt-3">
                    {project.tech.map((item) => (
                        <ProjectTechTag key={`${project.name}.${item}`} name={item} />
                    ))}
                </div>
                <div className="flex flex-wrap gap-x-2 gap-y-2 mt-5">
                    {project.url.length > 0 && <ProjectLink text="View" url={project.url} />}
                    {project.github.length > 0 && <ProjectLink text="Source code" url={project.github} />}
                </div>
            </animated.div>
        </animated.article>
    );
};

export default ProjectCard;
