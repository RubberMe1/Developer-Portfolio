import ProjectCard from "./components/ProjectCard";

const projects = [
    {
        name: "Checkers Game",
        description: "Welcome to my interactive Checkers game, a fully functional web-based application designed to demonstrate advanced skills in HTML, CSS, and JavaScript.",
        url: "https://checkerboardgame.netlify.app/",
        imgUrl: "data:image/jpeg;base64,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",
    },
    {
        name: "Weather App",
        description: "My weather app is a visually appealing, dynamic web application that fetches real-time weather data for any city using the OpenWeather API.",
        url: "https://my-weather-app56.netlify.app/",
        imgUrl: "data:image/jpeg;base64,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",
    },
    {
        name: "Youtube Clone",
        description: "This project is a responsive clone of the YouTube landing page, designed to mimic the familiar layout and functionality of the popular video-sharing platform.",
        url: "https://myclone56.netlify.app/",
        imgUrl: "https://th.bing.com/th/id/OIP.xFJMzVmcqbjYefKrYAeL7gHaEI?w=640&h=357&rs=1&pid=ImgDetMain",
    },
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