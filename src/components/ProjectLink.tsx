interface ProjectLinkProps {
    text: string;
    url: string;
}

const ProjectLink = ({ url, text }: ProjectLinkProps): JSX.Element => {
    return (
        <a
            className="p-2 px-5 rounded-md bg-gray-700 text-white w-fit hover:bg-gray-800 transition-colors"
            href={url}
            target="_blank"
            rel="no-referer noreferrer"
        >
            {text}
        </a>
    );
};

export default ProjectLink;
