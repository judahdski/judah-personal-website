import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

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

// hamburger button
const hamburgerButton = document.getElementById('hamburgerBtn');

hamburgerButton.addEventListener('click', () => {
    document.querySelector('nav').style.top = 0;
});

const closeNavBtn = document.getElementById('closeBtn');

closeNavBtn.addEventListener('click', () => {
    document.querySelector('nav').style.top = '-100%';
});
