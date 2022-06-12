import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPaintbrush, faUserAstronaut } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { animated, useSpring } from 'react-spring';

const Nav = (): JSX.Element => {
    const navSpring = useSpring({
        from: {
            distance: 100,
            opacity: 0,
        },
        to: {
            distance: 0,
            opacity: 1,
        },
        delay: 200,
    });

    return (
        <ul className="fixed top-0 right-0 p-5 flex justify-end gap-10 bg-white">
            <animated.li
                style={{
                    opacity: navSpring.opacity,
                    transform: navSpring.distance.to((x) => `translateX(${x * 3}px)`),
                }}
            >
                <FontAwesomeIcon icon={faUserAstronaut} />
            </animated.li>
            <animated.li
                style={{
                    opacity: navSpring.opacity,
                    transform: navSpring.distance.to((x) => `translateX(${x * 2}px)`),
                }}
            >
                <FontAwesomeIcon icon={faPaintbrush} />
            </animated.li>
            <animated.li
                style={{
                    opacity: navSpring.opacity,
                    transform: navSpring.distance.to((x) => `translateX(${x * 1}px)`),
                }}
            >
                <FontAwesomeIcon icon={faEnvelope} />
            </animated.li>
        </ul>
    );
};

export default Nav;
