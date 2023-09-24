import { Route, Routes } from 'react-router-dom';
import './assets/style/index';
import { Header, Home, Projects, Contacts, Footer, NavText } from './components/index';
import { useState } from 'react';

const App = () => {
    const [navText, setNavText] = useState('HOME');

    const setNavTextHandle = (text) => setNavText(text);
    const innerHeight = window.innerHeight;

    return (
        <>
            <div className={`relative w-screen h-[${innerHeight}px]`}>
                <div className="absolute top-0 bottom-0 left-0 right-0">
                    <Header navButtonOnClick={setNavTextHandle} navText />
                    <div className="split md:flex">
                        <main className="w-full h-full overflow-scroll md:relative order-2">
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/projects" element={<Projects />} />
                                <Route path="/contacts" element={<Contacts />} />
                            </Routes>
                        </main>
                        <Footer />
                        <NavText textContent={navText} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default App;
