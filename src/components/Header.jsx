import { NavLink } from 'react-router-dom';
import regularLogo from '../assets/img/regular-logo.png';

const Header = () => {
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
                
                <NavLink to='/projects' className={'nav-btn text-center p-3 pb-4 text-decoration-none'}>PROJECTS</NavLink>
                <NavLink to='/contacts' className={'nav-btn text-center p-3 pb-4 text-decoration-none'}>CONTACT</NavLink>
            </nav>
            <i className="fa-solid fa-align-right mobile-nav" id="hamburgerBtn"></i>
        </header>
    );
}

export default Header;
