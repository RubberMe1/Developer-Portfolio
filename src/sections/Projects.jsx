import ProjectCard from "./components/ProjectCard";

const projects = [
    {
        name: "Quiz AI Generator",
        description: "study faster, upload your content and let AI quiz you",
        url: "https://webdecoded.gumroad.com/l/weooa",
    }
]

const Projects = () => {
    return (
        <>
            <h1 className="text-4xl text-left font-bold mb-2">Recent Projects</h1>
            <ul className="bg-white text-left rounded-xl p-4">
                {projects.map((project, i) => (
                    <li key={i}>
                    <ProjectCard
                    name={project.name}
                    description={project.description}
                    url={project.url}
                    imgUrl={project.imgUrl}
                    />
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Projects;