import { Route, Routes } from 'react-router-dom';
import './assets/style/index';
import { Header, Home, Projects, Contacts, Footer, NavText } from './components/index';

const App = () => {
    return (
        <>
            <div className="root-wrapper">
                <Header />
                <div className="split d-lg-flex">
                    <main className="container">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/projects" element={<Projects />} />
                            <Route path="/contacts" element={<Contacts />} />
                        </Routes>
                    </main>
                    <Footer />
                    <NavText />
                </div>
            </div>
        </>
    );
}

export default App;
