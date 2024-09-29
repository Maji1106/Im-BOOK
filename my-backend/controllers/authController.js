const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../db');

// ตรวจสอบว่ามี email หรือ username ซ้ำหรือไม่
const checkDuplicate = (req, res, next) => {
    const { email, username } = req.body;

    db.query('SELECT * FROM users WHERE email = ? OR username = ?', [email, username], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        if (results.length > 0) {
            return res.status(400).json({ message: 'Email or Username already exists' });
        }
        next();
    });
};

// สมัครสมาชิก
const register = async (req, res) => {
    const { username, email, password, role = 'user' } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    db.query('INSERT INTO users (username, email, password, role) VALUES (?, ?, ?, ?)', [username, email, hashedPassword, role], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: 'User registered successfully!' });
    });
};

// ล็อกอิน
const login = (req, res) => {
    const { username, password } = req.body;

    db.query('SELECT * FROM users WHERE username = ?', [username], async (err, results) => {
        if (err || results.length === 0) return res.status(400).json({ message: 'User not found' });

        const user = results[0];
        const match = await bcrypt.compare(password, user.password);
        if (!match) return res.status(401).json({ message: 'Invalid credentials' });

        const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });
        res.json({ token });
    });
};

module.exports = { register, login, checkDuplicate };
