import Tag from "./components/Tag";

const skills = [
    "JavaScript",
    "React.js",
    "HTML & CSS",
    "Git & GitHub",
    "PostgreSQL",
    "Node.js"
];

const Skills = () => {
    return (
        <section className="bg-white text-left rounded-xl p-2 md:p-5 shadow-md mt-6">
            <header className="text-lg md:text-2xl text-black mb-3 font-semibold text-center md:text-left">
                Skills
            </header>
            <ul className="flex flex-wrap leading-10">
                {skills.map((skill, index) => (
                    <li key={index} className="mr-2 mb-2">
                        <Tag name={skill} />
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Skills;
