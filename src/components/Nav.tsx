import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPaintbrush, faUserAstronaut } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { animated, useTrail } from 'react-spring';

const items = [
    { key: 'a', icon: <FontAwesomeIcon icon={faUserAstronaut} /> },
    { key: 'b', icon: <FontAwesomeIcon icon={faPaintbrush} /> },
    { key: 'c', icon: <FontAwesomeIcon icon={faEnvelope} /> },
];

const Nav = (): JSX.Element => {
    const trail = useTrail(3, {
        from: { distance: 8, opacity: 0 },
        to: { distance: 0, opacity: 1 },
        config: { mass: 5, tension: 2000, friction: 200 },
        delay: 200,
    });

    return (
        <ul className="fixed top-0 right-0 p-5 flex justify-end gap-10 bg-white">
            {trail.map((styles, idx) => (
                <animated.li
                    key={items[idx].key}
                    style={{
                        opacity: styles.opacity,
                        transform: styles.distance.to((x) => `translateX(${x * (idx + 1)}rem)`),
                    }}
                >
                    {items[idx].icon}
                </animated.li>
            ))}
        </ul>
    );
};

export default Nav;
