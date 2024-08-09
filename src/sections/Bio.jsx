import { Linkedin, AtSign, GitBranch } from "lucide-react";

const Bio = () => {
    return (
        <section className="bg-white text-center md:text-left rounded-xl p-4 md:p-5 shadow-md">
            <img src="/profile-pic.png" alt="profile picture" className="h-32 w-32 rounded-full mx-auto md:mx-0" />
            <h1 className="text-lg md:text-2xl text-black font-bold mt-3">Joshua Ortiz</h1>
            <p className="text-black py-2">I'm an aspiring Junior Web Developer.</p>
            <div className="flex flex-row justify-center md:justify-start gap-2 mt-2">
                <a href="https://www.linkedin.com/in/joshua-ortiz-7b7227287/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <Linkedin className="text-blue-400 hover:text-blue-500 cursor-pointer" />
                </a>
                <a href="mailto:joshua032702@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
                    <AtSign className="text-green-400 hover:text-green-500 cursor-pointer" />
                </a>
                <a href="https://github.com/RubberMe1" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <GitBranch className="text-red-400 hover:text-red-500 cursor-pointer" />
                </a>
            </div>
        </section>
    );
};

export default Bio;
