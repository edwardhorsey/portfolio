import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faAt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { animated, useTrail } from 'react-spring';

const items = [
    { key: 'a', url: 'mailto:edwardhorsey@proton.me', icon: faAt },
    { key: 'b', url: 'https://www.linkedin.com/in/edward-horsey-5a69151a1', icon: faLinkedin },
    { key: 'c', url: 'https://www.github.com/edwardhorsey', icon: faGithub },
];

const ContactIcons = (): JSX.Element => {
    const [ref, inView] = useInView();
    const [hasEntered, setHasEntered] = useState(false);
    const trail = useTrail(3, {
        distance: hasEntered ? 0 : -4,
        opacity: hasEntered ? 1 : 0,
        config: { mass: 5, tension: 2000, friction: 200 },
        delay: 200,
    });

    useEffect(() => {
        if (inView && !hasEntered) setHasEntered(true);
    }, [inView, hasEntered]);

    return (
        <ul
            ref={ref}
            className="flex gap-6 lg:gap-3 lg:pt-2 justify-center lg:justify-start lg:flex-col w-full text-4xl"
        >
            {trail.map((styles, idx) => (
                <animated.li
                    key={items[idx].key}
                    style={{
                        opacity: styles.opacity,
                        transform: styles.distance.to((x) => `translateY(${x * (idx + 1)}rem)`),
                    }}
                >
                    <a key="a" href={items[idx].url} target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={items[idx].icon} />
                    </a>
                </animated.li>
            ))}
        </ul>
    );
};

export default ContactIcons;
