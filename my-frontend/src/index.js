import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // ถ้ามีไฟล์ CSS
import App from './App'; // ถ้าคุณมีไฟล์ App.js
import reportWebVitals from './reportWebVitals'; // อ้างอิงถึง reportWebVitals

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

reportWebVitals();
