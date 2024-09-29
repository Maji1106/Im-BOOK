// products.js
const express = require('express');
const router = express.Router();
const db = require('../config/db');  // เรียกใช้การเชื่อมต่อ MySQL

// แสดงข้อมูลผลิตภัณฑ์ทั้งหมด
router.get('/', (req, res) => {
    db.query('SELECT * FROM products', (err, results) => {
        if (err) {
            return res.status(500).send('Error fetching products');
        }
        res.json(results);
    });
});

// แสดงรายละเอียดของผลิตภัณฑ์ตามไอดี
router.get('/:id', (req, res) => {
    const id = req.params.id;
    db.query('SELECT * FROM products WHERE id = ?', [id], (err, results) => {
        if (err) {
            return res.status(500).send('Error fetching product');
        }
        res.json(results[0]);
    });
});

module.exports = router;
