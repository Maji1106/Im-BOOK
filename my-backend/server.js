const express = require('express');
const app = express();
const mysql = require('mysql2');

// สร้างการเชื่อมต่อกับฐานข้อมูล MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',  // เปลี่ยนรหัสผ่านให้ตรงกับที่คุณตั้งไว้
    database: 'mar'    // เปลี่ยนชื่อฐานข้อมูลให้ตรงกับที่คุณใช้
});

// สร้าง endpoint สำหรับดึงข้อมูลผลิตภัณฑ์
app.get('/api/products', (req, res) => {
    db.query('SELECT * FROM products', (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});

// ฟังที่ port 5100
app.listen(5100, () => {
    console.log('Server running on port 5100');
});

