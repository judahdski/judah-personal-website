import { Route, Routes } from 'react-router-dom';
import './assets/style/index';
import { Header, Footer, NavText } from './components/index';
import { Home, Projects, Contacts } from "./pages/index";
import { useState } from 'react';

const App = () => {
    const [navText, setNavText] = useState('');

    const setNavTextHandle = (text) => setNavText(text);
    const innerHeight = window.innerHeight;

    return (
        <>
            <div className={`relative w-screen h-[${innerHeight}px]`}>
                <div className='absolute top-0 bottom-0 left-0 right-0'>
                    <Header navButtonOnClick={setNavTextHandle} />
                    <div className='split md:flex'>
                        <main className='w-full h-full overflow-hidden md:relative order-2'>
                            <Routes>
                                <Route
                                    path='/'
                                    element={<Home />}
                                />
                                <Route
                                    path='/projects'
                                    element={<Projects />}
                                />
                                <Route
                                    path='/contacts'
                                    element={<Contacts />}
                                />
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
