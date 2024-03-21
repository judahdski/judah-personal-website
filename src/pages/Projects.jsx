import { useState } from 'react';
import { PROJECTS } from '../assets/constant/projects';

const Projects = () => {
    return (
        <section
            id='projects'
            className='px-4 md:px-8 flex justify-center items-center'>
            <div className='pt-4 pb-[72px] md:pt-6 md:pb-8 w-full h-full flex flex-wrap justify-center items-start gap-4 md:gap-6 overflow-y-scroll scrollbar-hide'>
                {PROJECTS.map((project, index) => (
                    <ProjectCards
                        key={index}
                        project={project}
                        index={index}
                    />
                ))}
            </div>
        </section>
    );
};

const ProjectCards = ({ project }) => {
    const [isHover, setIsHover] = useState(false);

    return (
        <div
            className={`bg-[#1D1D1D] w-full max-w-[360px] md:w-full md:max-w-[405px] border-solid border-2 rounded-2xl flex flex-col overflow-hidden transition cursor-pointer ${project.utils.cardAppearance.backgroundColor} ${project.utils.cardAppearance.shadowColor}`}
            onClick={() => {
                setIsHover((oldState) => !oldState);
            }}>
            <div className='relative'>
                <img
                    src={project.utils.thumbnailURL}
                    alt={project.title}
                    className='w-full bg-black aspect-video md:basis-1/3 object-cover'
                />
                <div className='bg-gradient-to-t from-[#1D1D1D] from-5% via-[#1d1d1ddd] via-20% to-transparent to-90% absolute bottom-0 left-0 top-0 right-0 z-[1]'></div>
                <h4 className='font-semibold text-white absolute bottom-6 left-4 z-[2]'>{project.title}</h4>
            </div>
            <div className='text-white md:basis-2/3 p-6'>
                <div className='flex flex-wrap gap-2'>
                    <p className='py-1 px-2 text-white text-sm border border-white bg-transparent rounded-md'>{project.category.title}</p>
                    {project.techStack.map((tech, index) => (
                        <p
                            key={index}
                            className={`py-1 px-2 text-sm rounded-md flex gap-2 items-center ${tech.style.background} ${tech.style.text}`}>
                            <img
                                src={tech.logoUrl}
                                className='w-4 h4 rounded'
                            />
                            {tech.description}
                        </p>
                    ))}
                </div>
                {isHover ? <p className='opacity-75 mt-4'>{project.description}</p> : <></>}
                <div className='w-full flex gap-3 mt-6'>
                    {window.innerWidth < 768 ? (
                        project.utils.isMobile ? (
                            <a
                                href={project.links.site}
                                target='_blank'
                                className='text-white font-semibold w-full bg-[#4DBD57] rounded-lg flex items-center justify-center'>
                                <i className='fa-solid fa-arrow-up-right-from-square mr-2'></i> Live Demo
                            </a>
                        ) : (
                            <div
                                onClick={() => alert('Tidak support untuk versi mobile.')}
                                className='text-white font-semibold w-full bg-[#3b9143] rounded-lg flex items-center justify-center cursor-pointer'>
                                <i className='fa-solid fa-arrow-up-right-from-square mr-2'></i> Live Demo
                            </div>
                        )
                    ) : (
                        <a
                            href={project.links.site}
                            target='_blank'
                            className='text-white font-semibold w-full bg-[#4DBD57] rounded-lg flex items-center justify-center'>
                            <i className='fa-solid fa-arrow-up-right-from-square mr-2'></i> Live Demo
                        </a>
                    )}
                    <a
                        href={project.links.github}
                        className='aspect-square h-[40px] bg-white rounded-lg flex items-center justify-center'>
                        <i className='fa-brands fa-github text-2xl text-black'></i>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Projects;
