import { projects } from "../assets/data";

const Projects = () => {
    return (
        <section id="projects" className="px-4 md:px-8 flex justify-center items-center">
            <div className="pt-4 md:pt-6 w-full h-full flex flex-col justify-start items-center gap-4 md:gap-6 overflow-y-scroll">
                {projects.map((project, index) => (
                    <div key={index} className="bg-mainColor w-full max-w-[360px] md:w-full md:max-w-[1000px] p-3 border-solid border-2 border-[#F75959] flex flex-col gap-3 md:flex-row md:gap-6">
                        <img src={project.imageURL} alt={project.name} className='w-full bg-black aspect-video md:basis-1/3 object-cover' />
                        <div className="text-white md:basis-2/3">
                            <h4 className="font-semibold">{project.name}</h4>
                            <div className="pt-2 pb-4">
                                <p className="pb-2 opacity-75">{project.description}</p>
                                <p>Tech stack : {project.techStack}</p>
                            </div>
                            <a href={project.siteLink} className="text-[#F75959]">VISIT WEBSITE</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;
