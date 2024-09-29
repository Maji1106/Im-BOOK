// db.js
const mysql = require('mysql2');

// สร้างการเชื่อมต่อกับ MySQL
const connection = mysql.createConnection({
    host: 'localhost',  // หรือที่อยู่ของฐานข้อมูล
    user: 'yourusername',  // ชื่อผู้ใช้ของ MySQL
    password: 'yourpassword',  // รหัสผ่านของ MySQL
    database: 'yourdatabase'  // ชื่อฐานข้อมูล
});

// เชื่อมต่อกับฐานข้อมูล
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the MySQL database');
});

module.exports = connection;
