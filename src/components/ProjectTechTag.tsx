interface ProjectTechTagProps {
    name: string;
}

const ProjectTechTag = ({ name }: ProjectTechTagProps): JSX.Element => {
    return <span className="py-1 px-2 text-sm rounded-md bg-gray-500 text-white select-none">{name}</span>;
};

export default ProjectTechTag;
