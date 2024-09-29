// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home'; // ตรวจสอบว่าได้สร้างคอมโพเนนต์นี้
import Products from './components/Products'; // ตรวจสอบว่าได้สร้างคอมโพเนนต์นี้
import RentalHistory from './components/RentalHistory'; // ตรวจสอบว่าได้สร้างคอมโพเนนต์นี้

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} /> {/* หน้าหลัก */}
                <Route path="/products" element={<Products />} /> {/* เส้นทางสำหรับ Products */}
                <Route path="/rental-history" element={<RentalHistory />} /> {/* เส้นทางสำหรับ Rental History */}
            </Routes>
        </Router>
    );
};

export default App;
