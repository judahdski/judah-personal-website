const Projects = () => {
    return (
        <section id="projects" className="projects pt-4 px-lg-4 pb-5 py-lg-3 justify-content-center align-items-center">
            <div className="py-3 py-lg-4 d-flex flex-column justify-content-lg-center align-content-lg-start gap-4">
                <div className="project-card p-3 d-flex flex-column flex-lg-row gap-3 gap-lg-4">
                    <img src="" />
                    <div className="d-lg-flex flex-column justify-content-between">
                        <div className="project-description d-flex flex-column gap-3">
                            <p className="mb-0">Jhon Doe 3D Portfolio</p>
                            <p className="mb-0">
                                Website portfolio 3D ini dibangun menggunakan teknologi React JS, Tailwind, dan Three JS. Dengan antarmuka yang interaktif dan responsif, membuat website ini menjadi platform yang menarik untuk menampilkan
                                portofolio seni 3D.
                            </p>
                            <p className="mb-0">Tech stack : Javascript, React JS, Three JS, Tailwind</p>
                        </div>
                        <a href="https://jhondoe-portfolio.netlify.app/" target="blank">
                            VISIT WEBSITE
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;
