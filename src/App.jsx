import { Route, Routes } from 'react-router-dom';
import './assets/style/index';
import { Header, Footer, NavText } from './components/index';
import { Home, Projects, Contacts } from './pages/index';
import { useState } from 'react';

// Initial state
export const App = () => {
	onInit();

	return <MainApp />;
};

// #region initial methods
const onInit = () => {
	greetUser();
};

const greetUser = () => {
	const day = new Date();
	const hr = day.getHours(),
		language = navigator.language;
	let greetWord = '';

	if (hr >= 0 && hr < 12) {
		greetWord = `Good ${language == 'id_ID' || language == 'id-ID' ? 'Pagi' : 'Morning'}! 🌄`;
	} else if (hr == 12) {
		greetWord = `Good ${language == 'id_ID' || language == 'id-ID' ? 'Siang' : 'Afternoon'}! 🌞`;
	} else if (hr >= 12 && hr <= 17) {
		greetWord = `Good ${language == 'id_ID' || language == 'id-ID' ? 'Sore' : 'Afternoon'}! 🌇`;
	} else {
		greetWord = `Good ${language == 'id_ID' || language == 'id-ID' ? 'Malam' : 'Evening'}! 🌆`;
	}

	document.title = greetWord;
};
// #endregion initial methods

// #region main app component
const MainApp = () => {
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
// #endregion main app component
