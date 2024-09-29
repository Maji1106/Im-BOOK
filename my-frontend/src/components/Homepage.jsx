import React from 'react';

const Homepage = () => {
    return (
        <div className="text-center">
            <h1 className="text-4xl font-bold">ยินดีต้อนรับสู่เว็บไซต์ของเรา</h1>
            <p className="mt-4 text-lg">เรามีผลิตภัณฑ์มากมายให้คุณเลือกสรร!</p>
            <a href="/products" className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded">
                ดูผลิตภัณฑ์ทั้งหมด
            </a>
        </div>
    );
};

export default Homepage;
