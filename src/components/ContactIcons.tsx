import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faAt, faCamera } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { animated, useTrail } from 'react-spring';

const items = [
    { key: 'a', url: 'mailto:edwardhorsey@proton.me', icon: faAt },
    { key: 'b', url: 'https://www.linkedin.com/in/edward-horsey-5a69151a1', icon: faLinkedin },
    { key: 'c', url: 'https://www.github.com/edwardhorsey', icon: faGithub },
    { key: 'd', url: 'https://www.flickr.com/photos/198757426@N02', icon: faCamera },
];

const ContactIcons = (): JSX.Element => {
    const [ref, inView] = useInView();
    const [enter, setEnter] = useState(false);
    const trail = useTrail(4, {
        distance: enter ? 0 : -4,
        opacity: enter ? 1 : 0,
        config: { mass: 18, tension: 2500, friction: 200 },
        delay: 200,
    });

    useEffect(() => {
        if (inView && !enter) setEnter(true);
    }, [inView, enter]);

    return (
        <ul
            ref={ref}
            className="flex gap-6 lg:gap-3 lg:pt-2 lg:pl-2 justify-center lg:justify-start lg:flex-col w-full text-4xl"
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
