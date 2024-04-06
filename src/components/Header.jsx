import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import regularLogo from '../assets/img/regular-logo.png';
import { menus, socialMedias } from '../assets/constant';

const Header = ({ navButtonOnClick }) => {
	const [navMenuActive, setNavMenuActive] = useState(false);
	const innerWidth = window.innerWidth;

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
                bg-[#1c1c1c] h-full flex flex-row items-center justify-center gap-6 text-center z-10 inset-x-0`}
				onClick={() => {
					setNavMenuActive(!navMenuActive);
				}}>
				{innerWidth > 768 ? (
					menus.map(({ path, title }, index) => (
						<NavLink
							key={index}
							to={`/${path}`}
							className='px-4 py-2 font-medium text-base tracking-wider border border-[#1c1c1c] hover:border-white rounded-xl active:border-white active:bg-[#ffffffaf] active:text-black'
							onClick={() => {
								setNavMenuActive(!navMenuActive);
								navButtonOnClick(title);
							}}>
							{title}
						</NavLink>
					))
				) : (
					<></>
				)}
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

			{/* Mobile menu pop up */}
			{navMenuActive && innerWidth < 768 ? (
				<div
					className='pb-14 absolute top-0 left-0 right-0 h-screen bg-[rgba(61,61,61,0.32)] flex justify-center items-end z-10'
					onClick={() => setNavMenuActive(false)}>
					<MobileMenu />
				</div>
			) : (
				<></>
			)}
		</header>
	);
};

const MobileMenu = () => (
	<div className='p-6 w-[320px] bg-[#292929] border border-white rounded-[18px] flex flex-col gap-4 md:hidden'>
		{menus.map(({ path, title }, index) => (
			<NavLink
				key={index}
				to={`/${path}`}
				className='py-4 font-medium text-sm tracking-widest bg-white text-black rounded-xl active:border-white active:bg-[#292929] active:text-white text-center'
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
