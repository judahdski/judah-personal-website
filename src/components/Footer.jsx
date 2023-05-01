import { socialMedias } from '../assets/data';

const Footer = () => {
    return (
        <footer className="hidden md:h-full md:px-12 md:pb-[92px] md:flex md:justify-center md:items-end">
            <div className="flex flex-col gap-3">
                {socialMedias.map((socialMedia, index) => (
                    <a href={socialMedia.link} key={index}>
                        <span style={{ color: 'white', fontSize: '24px' }}>
                            <i className={socialMedia.icon} />
                        </span>
                    </a>
                ))}
            </div>
        </footer>
    );
};

export default Footer;
