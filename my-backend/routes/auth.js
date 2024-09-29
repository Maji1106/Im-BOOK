const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');

// Register
router.post('/register', async (req, res) => {
    // Validate username/email duplication and role
    // Create user logic
});

// Login
router.post('/login', async (req, res) => {
    // Authentication logic
});

router.post('/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        // Validate username/email duplication and role
        // Create user logic
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post('/register', [
    body('username').notEmpty().withMessage('กรุณากรอกชื่อผู้ใช้'),
    body('email').isEmail().withMessage('กรุณากรอกอีเมลที่ถูกต้อง'),
    body('password').isLength({ min: 6 }).withMessage('รหัสผ่านต้องมีความยาวอย่างน้อย 6 ตัวอักษร'),
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    // Continue with user creation
});
const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || (isLogin ? false : !email) || !password) {
        alert("กรุณากรอกข้อมูลให้ครบถ้วน");
        return;
    }
    // Continue with API call
};

module.exports = router;
