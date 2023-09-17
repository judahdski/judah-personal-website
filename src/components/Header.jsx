import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import regularLogo from '../assets/img/regular-logo.png';

const Header = ({ navButtonOnClick }) => {
    const [navMenuActive, setNavMenuActive] = useState(false);

    return (
        <header
            className="
            h-[60px] md:h-20 text-white
            px-6 md:px-5 
            flex justify-between items-center
        "
        >
            <a href="/">
                <img src={regularLogo} className="w-8 md:w-12 aspect-square" />
            </a>
            <nav
                className={`bg-[#1c1c1c] p-4 md:h-full md:p-0
                flex flex-col md:flex-row items-stretch md:items-center gap-6 text-center absolute inset-x-0 shadow transition z-10 ${navMenuActive ? 'top-0' : '-top-full'} md:static md:shadow-none`}
            >
                <span
                    className="md:hidden px-4 py-3 text-end"
                    onClick={() => {
                        setNavMenuActive(!navMenuActive);
                    }}
                >
                    <i className="fa-solid fa-xmark" id="closeBtn"></i>
                </span>
                <NavLink
                    to="/projects"
                    className="px-4 py-2 font-medium text-base tracking-wider border border-[#1c1c1c] hover:border-white rounded-xl active:border-white active:bg-[#ffffffaf] active:text-black"
                    onClick={() => {
                        setNavMenuActive(!navMenuActive);
                        navButtonOnClick('PROJECTS');
                    }}
                >
                    PROJECTS
                </NavLink>
                <NavLink
                    to="/"
                    className="px-4 py-2 font-medium text-base tracking-wider border border-[#1c1c1c] hover:border-white rounded-xl active:border-white active:bg-[#ffffffaf] active:text-black"
                    onClick={() => {
                        // setNavMenuActive(!navMenuActive);
                        // navButtonOnClick('PROJECTS');
                    }}
                >
                    RESUME
                </NavLink>
                <NavLink
                    to="/contacts"
                    className="px-4 py-2 font-medium text-base tracking-wider border border-[#1c1c1c] hover:border-white rounded-xl active:border-white active:bg-[#ffffffaf] active:text-black"
                    onClick={() => {
                        setNavMenuActive(!navMenuActive);
                        navButtonOnClick('CONTACT');
                    }}
                >
                    CONTACT
                </NavLink>
            </nav>
            <span
                className="md:hidden px-4 py-3"
                onClick={() => {
                    setNavMenuActive(!navMenuActive);
                }}
            >
                <i className="fa-solid fa-align-right" id="hamburgerBtn"></i>
            </span>
        </header>
    );
};

export default Header;
