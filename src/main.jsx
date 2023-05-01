import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

const screenWidth = window.innerWidth;

ReactDOM.createRoot(document.getElementById('root')).render(
    screenWidth >= 768 ? (
        <React.StrictMode>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </React.StrictMode>
    ) : (
        <h1>Mohon maaf, Website sedang dalam perbaikan 🙏🏻</h1>
    )
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
