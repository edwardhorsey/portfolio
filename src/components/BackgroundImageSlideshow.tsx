import { useState } from 'react';
import { animated, SpringValue, useTransition } from 'react-spring';
import useInterval from '../hooks/useInterval';

interface BackgroundImageSlideshowProps {
    projectImages: string[];
    cardSpringOpacity: SpringValue<number>;
}

const BackgroundImageSlideshow = ({ projectImages, cardSpringOpacity }: BackgroundImageSlideshowProps): JSX.Element => {
    const [currentBackgroundImage, setCurrentBackgroundImage] = useState(0);
    useInterval(
        () => setCurrentBackgroundImage((currentBackgroundImage + 1) % projectImages.length),
        Math.random() * 1000 + 5000,
    );
    const transitions = useTransition(projectImages[currentBackgroundImage], {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: { tension: 280, friction: 120 },
    });

    return transitions((styles, item) => (
        <animated.div
            className="absolute inset-0 w-full h-full z-0 bg-center bg-cover"
            style={{ opacity: styles.opacity, backgroundImage: `url(${item})` }}
        >
            <animated.div
                className="absolute inset-0 w-full h-full"
                style={{
                    backgroundImage: cardSpringOpacity.to((opacity) => {
                        const value = opacity * 0.6;
                        return `linear-gradient(rgba(0, 0, 0, ${value}), rgba(0, 0, 0, ${value}))`;
                    }),
                }}
            />
        </animated.div>
    ));
};

export default BackgroundImageSlideshow;
