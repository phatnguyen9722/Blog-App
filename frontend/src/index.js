import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './asset/sass/index.scss';
import './asset/css/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
