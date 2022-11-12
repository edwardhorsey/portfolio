interface HeadingProps {
    className?: string;
    text: string;
}

const Heading = ({ className = '', text }: HeadingProps): JSX.Element => {
    return <h2 className={`font-bold text-5xl xs:text-6xl p-5 ${className}`}>{text}</h2>;
};

export default Heading;
