import { useState } from 'react';

const Home = () => {
    const [isHomepage, setIsHomepage] = useState(true);

    return (
        <section
            id='home'
            className='home relative h-full flex justify-center items-center text-white cursor-pointer'
            onClick={() => {window.innerWidth > 768 ? setIsHomepage((oldState) => !oldState) : console.log('Hi')}}>
            {isHomepage ? (
                <div className='home-text-content'>
                    <p className='py-2 px-3 px-lg-4 mb-0 opacity-70'>I AM</p>
                    <i
                        className='text-7xl md:text-9xl'
                        style={{ fontFamily: 'Pacifico' }}>
                        JUDAH
                    </i>
                    <p className='py-2 px-3 px-lg-4 mb-0 text-end italic opacity-80'>
                        A Junior <br /> Web Developer
                    </p>
                </div>
            ) : (
                <p>ABOUT ME</p>
            )}

            {isHomepage && window.innerWidth > 768 ? <p className='absolute bottom-8 text-sm opacity-60'>Click here for the detail about me</p> : <></>}
        </section>
    );
};

export default Home;
