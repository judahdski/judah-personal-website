import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { IS_MAINTENANCE } from '../env_temp.js';

if (IS_MAINTENANCE) {
	ReactDOM.createRoot(document.getElementById('root')).render(
		screenWidth >= 768 ? (
			<React.StrictMode>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</React.StrictMode>
		) : (
			<div className='h-screen px-6 text-white flex flex-col gap-4 justify-center'>
				<img
					src={maintenanceLogo}
					className=''
				/>
				<h1 className='text-base font-medium text-center bg-stone-600 p-2 rounded-md'>
					Situs kami sedang dalam perbaikan. Silahkan buka di layar besar (tablet, laptop). <br /> Terima kasih 🙏🏻{' '}
				</h1>
			</div>
		)
	);
} else {
	ReactDOM.createRoot(document.getElementById('root')).render(
		<React.StrictMode>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</React.StrictMode>
	);
}