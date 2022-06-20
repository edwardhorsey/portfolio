import { useState } from 'react';
import { animated, useSpring } from 'react-spring';
import { Project } from '../data/projects';
import useScreenType, { MOBILE } from '../hooks/useScreenType';
import BackgroundImageSlideshow from './BackgroundImageSlideshow';
import ProjectCardContent from './ProjectCardContent';

const ProjectCard = ({ project }: { project: Project }): JSX.Element => {
    const screenType = useScreenType();
    const isMobile = screenType === MOBILE;
    const [isActive, setIsActive] = useState(false);
    const cardSpring = useSpring({
        from: { opacity: 0 },
        to: { opacity: isMobile ? 1 : isActive ? 1 : 0 },
        config: { duration: 500 },
    });

    return (
        <animated.article
            className="w-full lg:w-[45%] min-h-[25rem] text-white p-2 relative"
            key={project.name}
            onMouseEnter={!isMobile ? () => setIsActive(true) : undefined}
            onMouseLeave={!isMobile ? () => setIsActive(false) : undefined}
        >
            <BackgroundImageSlideshow projectImages={project.images} cardSpringOpacity={cardSpring.opacity} />
            <animated.div
                style={{ opacity: cardSpring.opacity }}
                className="w-full h-full flex flex-col justify-end z-20"
            >
                <ProjectCardContent project={project} />
            </animated.div>
        </animated.article>
    );
};

export default ProjectCard;
