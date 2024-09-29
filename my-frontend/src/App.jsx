// src/App.js

import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
                <h1 className="text-center text-4xl font-bold mt-10">Welcome to Our Store!</h1>
                <p className="text-center text-lg mt-4">Discover our amazing products and deals.</p>
                {/* คุณสามารถเพิ่มเนื้อหาอื่นๆ ที่นี่ */}
            </main>
            <Footer />
        </div>
    );
};

export default App;
