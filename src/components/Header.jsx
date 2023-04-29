import regularLogo from '../assets/img/regular-logo.png';

function Header() {
    return (
        <header
            className="
            px-4 px-lg-5 
            d-flex justify-content-between align-items-center
        "
        >
            <a href="/" className="nav-btn" data-section="home">
                <img src={regularLogo} className="logo" />
            </a>
            <nav
                className="
                p-3 p-lg-2
                d-flex flex-column flex-lg-row align-items-stretch .align-items-lg-center gap-4   
            "
            >
                <span className="p-2" style={{ display: 'inline-block' }}>
                    <i className="fa-solid fa-xmark" id="closeBtn"></i>
                </span>
                <a href="#projects" onClick={() => event.preventDefault()} className="nav-btn text-center p-3 pb-4 text-decoration-none" data-section="projects">
                    PROJECTS
                </a>
                <a href="#contacts" onClick={() => event.preventDefault()} className="nav-btn text-center p-3 pb-4 text-decoration-none" data-section="contacts">
                    CONTACT
                </a>
            </nav>
            <i className="fa-solid fa-align-right mobile-nav" id="hamburgerBtn"></i>
        </header>
    );
}

export default Header;
