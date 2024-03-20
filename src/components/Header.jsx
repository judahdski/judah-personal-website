import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import regularLogo from '../assets/img/regular-logo.png';
import { menus, socialMedias } from '../assets/constant';

const Header = ({ navButtonOnClick }) => {
    const [navMenuActive, setNavMenuActive] = useState(false);

    return (
        <header
            className='
            h-[60px] md:h-20 text-white
            px-6 md:px-5 
            flex justify-between items-center
        '>
            <a href='/'>
                <img
                    src={regularLogo}
                    className='w-8 md:w-12 aspect-square'
                />
            </a>
            <nav
                className={`
                bg-[#1c1c1c6d] md:bg-[#1c1c1c] 
                p-4 md:h-full md:p-0
                ${navMenuActive ? 'flex top-full' : 'hidden'} md:flex flex-row items-end md:items-center justify-center gap-6 
                text-center transition z-10  absolute inset-x-0 md:static 
                shadow md:shadow-none`}
                onClick={() => {
                    setNavMenuActive(!navMenuActive);
                }}>
                {menus.map(({ path, title }, index) => (
                    <NavLink
                        key={index}
                        to={`/${path}`}
                        className='px-4 py-2 font-medium text-base tracking-wider border border-[#1c1c1c] hover:border-white rounded-xl active:border-white active:bg-[#ffffffaf] active:text-black hidden md:block'
                        onClick={() => {
                            setNavMenuActive(!navMenuActive);
                            navButtonOnClick(title);
                        }}>
                        {title}
                    </NavLink>
                ))}
                <MobileMenu />
            </nav>
            <span
                className='md:hidden px-4 py-3'
                onClick={() => {
                    setNavMenuActive(!navMenuActive);
                }}>
                <i
                    className='fa-solid fa-align-right'
                    id='hamburgerBtn'></i>
            </span>
        </header>
    );
};

const MobileMenu = () => (
    <div className='p-6 w-[320px] bg-[#292929] border border-white rounded-[18px] flex flex-col gap-4 md:hidden'>
        {menus.map(({ path, title }, index) => (
            <NavLink
                key={index}
                to={`/${path}`}
                className='py-4 font-medium text-sm tracking-widest bg-white text-black rounded-xl active:border-white active:bg-[#292929] active:text-white'
                onClick={() => {
                    setNavMenuActive(!navMenuActive);
                }}>
                {title}
            </NavLink>
        ))}
        <div className='mt-12 flex justify-center gap-9'>
            {socialMedias.map((socialMedia, index) => (
                <a
                    href={socialMedia.link}
                    key={index}>
                    <span style={{ color: 'white', fontSize: '24px' }}>
                        <i className={socialMedia.icon} />
                    </span>
                </a>
            ))}
        </div>
    </div>
);

export default Header;
