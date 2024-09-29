// src/components/Footer.js
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white text-center py-4">
            <p>&copy; {new Date().getFullYear()} Your Company Name. All Rights Reserved.</p>
            <p>Follow us on social media!</p>
            {/* คุณสามารถเพิ่มลิงก์โซเชียลมีเดียได้ที่นี่ */}
        </footer>
    );
};

export default Footer;
