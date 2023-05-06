import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import maintenanceLogo from './assets/img/under-construction-amico.png';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

const screenWidth = window.innerWidth;

// ReactDOM.createRoot(document.getElementById('root')).render(
//     screenWidth >= 768 ? (
//         <React.StrictMode>
//             <BrowserRouter>
//                 <App />
//             </BrowserRouter>
//         </React.StrictMode>
//     ) : (
//         <div className='h-screen px-6 text-white flex flex-col gap-4 justify-center'>
//             <img src={maintenanceLogo} className='' />
//             <h1 className='text-base font-medium text-center bg-stone-600 p-2 rounded-md'>Situs kami sedang dalam perbaikan. Silahkan buka di layar besar (tablet, laptop). <br /> Terima kasih 🙏🏻  </h1>
//         </div>
//     )
// );

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);

// Title greet
const day = new Date();
const hr = day.getHours();

if (hr >= 0 && hr < 12) {
    document.title += ' Pagi! 🌄';
} else if (hr == 12) {
    document.title += ' Siang! 🌞';
} else if (hr >= 12 && hr <= 17) {
    document.title += ' Sore! 🌇';
} else {
    document.title += ' Malam! 🌆';
}
