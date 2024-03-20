import { socialMedias } from '../assets/constant';

const Footer = () => {
    return (
        <footer className='hidden md:w-[100px] md:h-full md:px-12 md:pb-[92px] md:flex md:justify-center md:items-center'>
            <div className='flex flex-col gap-8'>
                {socialMedias.map((socialMedia, index) => (
                    <a
                        href={socialMedia.link}
                        key={index}>
                        <span style={{ color: 'white', fontSize: '28px' }}>
                            <i className={socialMedia.icon} />
                        </span>
                    </a>
                ))}
            </div>
        </footer>
    );
};

export default Footer;
