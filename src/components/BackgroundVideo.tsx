import { animated, SpringValue } from 'react-spring';

interface BackgroundVideoProps {
    videoSrc: string;
    cardSpringOpacity: SpringValue<number>;
}

const BackgroundVideo = ({ videoSrc, cardSpringOpacity }: BackgroundVideoProps): JSX.Element => {
    return (
        <animated.div className="absolute inset-0 w-full h-full z-0 bg-center bg-cover">
            <video
                src={videoSrc}
                muted
                autoPlay
                playsInline
                loop
                className="absolute inset-0 h-full w-full object-cover"
            />
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
    );
};

export default BackgroundVideo;
