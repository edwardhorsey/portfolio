import { useState } from 'react';
import { animated, useSpring } from 'react-spring';
import { Project } from '../data/projects';
import useScreenType, { MOBILE_SIZES } from '../hooks/useScreenType';

const ProjectCard = ({ project }: { project: Project }): JSX.Element => {
    const [isActive, setIsActive] = useState(false);
    const cardSpring = useSpring({
        opacity: isActive ? 1 : 0,
        config: { duration: 500 },
    });

    const screenType = useScreenType();
    const isMobile = MOBILE_SIZES.includes(screenType); // TODO include touch devices too

    return (
        <animated.article
            className="w-full lg:w-[45%] min-h-96 bg-center bg-cover text-white p-2"
            key={project.name}
            style={{
                backgroundImage: isMobile
                    ? `linear-gradient(rgba(0, 0, 0, ${0.6}), rgba(0, 0, 0, ${0.6})), url(${project.images[0]})`
                    : cardSpring.opacity.to((opacity) => {
                          const value = opacity * 0.6;

                          return `linear-gradient(rgba(0, 0, 0, ${value}), rgba(0, 0, 0, ${value})), url(${project.images[0]})`;
                      }),
            }}
            onMouseEnter={!isMobile ? () => setIsActive(true) : undefined}
            onMouseLeave={!isMobile ? () => setIsActive(false) : undefined}
        >
            <animated.div
                style={{ opacity: isMobile ? 1 : cardSpring.opacity }}
                className="w-full h-full flex flex-col justify-end"
            >
                <h1 style={{ filter: `drop-shadow(1px 1px 2px black)` }} className="text-2xl font-bold">
                    {project.name}
                </h1>
                <p className="text-lg xl:text-xl mt-2">{project.description}</p>
                <div className="flex flex-wrap gap-x-2 gap-y-2 mt-3">
                    {project.tech.map((item) => (
                        <span
                            key={`${project.name}.${item}`}
                            className="py-2 px-3 text-sm rounded-md bg-gray-500 text-white select-none"
                        >
                            {item}
                        </span>
                    ))}
                </div>
                <div className="flex flex-wrap gap-x-2 gap-y-2 mt-2">
                    {project.url.length > 0 && (
                        <a
                            className="p-2 px-3 rounded-md bg-gray-700 text-white w-fit"
                            href={project.url}
                            target="_blank"
                            rel="no-referer noreferrer"
                        >
                            View
                        </a>
                    )}
                    {project.github.length > 0 && (
                        <a
                            className="p-2 rounded-md bg-gray-700 text-white w-fit"
                            href={project.github}
                            target="_blank"
                            rel="no-referer noreferrer"
                        >
                            Source code
                        </a>
                    )}
                </div>
            </animated.div>
        </animated.article>
    );
};

export default ProjectCard;
