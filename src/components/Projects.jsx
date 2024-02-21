import { useState } from 'react';
import { PROJECTS } from '../assets/constant/projects';

const Projects = () => {
    return (
        <section id="projects" className="px-4 md:px-8 flex justify-center items-center">
            <div className="pt-4 pb-6 md:pt-6 md:pb-8 w-full h-full flex flex-wrap justify-center items-start gap-4 md:gap-6 overflow-y-scroll scrollbar-hide">
                {PROJECTS.map((project, index) => (
                    <ProjectCards key={index} project={project} index={index} />
                ))}
            </div>
        </section>
    );
};

const ProjectCards = ({ project }) => {
    const [isHover, setIsHover] = useState(false);

    return (
        <div
            className="bg-[#292929] w-full max-w-[360px] md:w-full md:max-w-[405px] border-solid border-2 border-white rounded-2xl flex flex-col overflow-hidden shadow-md shadow-[#ffffff55] transition cursor-pointer"
            onClick={() => {
                setIsHover((oldState) => !oldState);
            }}>
            <div className="relative">
                <img src={project.imageURL} alt={project.name} className="w-full bg-black aspect-video md:basis-1/3 object-cover" />
                <div className="bg-gradient-to-t from-[#292929] from-5% via-[#242424e0] via-30% to-transparent to-90% absolute bottom-0 left-0 top-0 right-0 z-[1]"></div>
                <h4 className="font-semibold text-white absolute bottom-6 left-4 z-[2]">{project.name}</h4>
            </div>
            <div className="text-white md:basis-2/3 p-6">
                <div className="flex flex-wrap gap-2">
                    <p className="py-1 px-2 text-[#1597BB] text-sm border-1 bg-[rgba(143,214,225,0.16)] rounded-md">{project.category.type.title}</p>
                    <p className="py-1 px-2 text-[#FFC045] text-sm bg-[rgba(143,214,225,0.16)] rounded-md">{project.category.techStack[0]}</p>
                    <p className="py-1 px-2 text-[#F30A49] text-sm bg-[rgba(143,214,225,0.16)] rounded-md">{project.category.techStack[1]}</p>
                </div>
                {isHover ? <p className="opacity-75 mt-4">{project.description}</p> : <></>}
                <div className="w-full flex gap-3 mt-6">
                    {window.innerWidth < 768 ? (
                        project.isMobile ? (
                            <a href={project.siteLink} target="_blank" className="text-[#03c484] font-semibold w-full bg-[#03c4a152] rounded-lg flex items-center justify-center">
                                <i className="fa-solid fa-arrow-up-right-from-square mr-2"></i> Live Demo
                            </a>
                        ) : (
                            <div onClick={() => alert('Tidak support untuk versi mobile.')} className="text-[#03c4a152] font-semibold w-full bg-[#40A2D8] rounded-lg flex items-center justify-center cursor-pointer">
                                <i className="fa-solid fa-arrow-up-right-from-square mr-2"></i> Live Demo
                            </div>
                        )
                    ) : (
                        <a href={project.siteLink} target="_blank" className="text-[#03c484] font-semibold w-full bg-[#03c4a152] rounded-lg flex items-center justify-center">
                            <i className="fa-solid fa-arrow-up-right-from-square mr-2"></i> Live Demo
                        </a>
                    )}
                    <a href={project.githubLink} className="aspect-square h-[40px] bg-white rounded-lg flex items-center justify-center">
                        <i className="fa-brands fa-github text-2xl text-black"></i>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Projects;
