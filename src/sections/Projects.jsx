import ProjectCard from "./components/ProjectCard";

const projects = [
    {
        name: "Checkers Game",
        description: "Welcome to my interactive Checkers game, a fully functional web-based application designed to demonstrate advanced skills in HTML, CSS, and JavaScript.",
        url: "https://checkerboardgame.netlify.app/",
    }
]

const Projects = () => {
    return (
        <>
            <h1 className="text-4xl text-left text-black font-bold mb-2">Recent Projects</h1>
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