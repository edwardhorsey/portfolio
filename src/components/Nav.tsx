import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPaintbrush, faUserAstronaut } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { RefObject } from 'react';
import { animated, useTrail } from 'react-spring';
import { useUIRefs } from '../contexts/UiRefsContext';

const items = [
    { key: 'a', icon: <FontAwesomeIcon icon={faUserAstronaut} />, destination: 'aboutMeRef' as const },
    { key: 'b', icon: <FontAwesomeIcon icon={faPaintbrush} />, destination: 'projectsRef' as const },
    { key: 'c', icon: <FontAwesomeIcon icon={faEnvelope} />, destination: 'contactRef' as const },
];

const goToSection = (section: RefObject<HTMLDivElement>) => {
    section.current?.scrollIntoView({ behavior: 'smooth' });
};

const Nav = (): JSX.Element => {
    const uiRefs = useUIRefs();
    const trail = useTrail(3, {
        from: { distance: 8, opacity: 0 },
        to: { distance: 0, opacity: 1 },
        config: { mass: 5, tension: 2000, friction: 200 },
        delay: 200,
    });

    return (
        <ul className="fixed top-0 right-0 p-2 lg:p-3 flex justify-end gap-2 lg:gap-10 bg-white transition-all duration-500 z-10">
            {trail.map((styles, idx) => (
                <animated.li
                    key={items[idx].key}
                    className="p-2 cursor-pointer"
                    style={{
                        opacity: styles.opacity,
                        transform: styles.distance.to((x) => `translateX(${x * (idx + 1)}rem)`),
                    }}
                    onClick={() => {
                        const destination = uiRefs[items[idx].destination];

                        if (destination) goToSection(destination);
                    }}
                >
                    {items[idx].icon}
                </animated.li>
            ))}
        </ul>
    );
};

export default Nav;
