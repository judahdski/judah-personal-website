import './assets/style/index';
import { Header, Home, Projects, Contacts, Footer, NavText } from './components/index';

function App() {
    return (
        <>
            <div className="root-wrapper">
                <Header />
                <div className="split d-lg-flex">
                    <main className="container">
                        <Home />
                        <Projects />
                        <Contacts />
                    </main>
                    <Footer />
                    <NavText />
                </div>
            </div>
        </>
    );
}

export default App;
