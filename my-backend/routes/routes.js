// routes.js
const express = require('express');
const router = express.Router();

// เพิ่ม route ที่นี่ เช่น
router.get('/api/products', (req, res) => {
    res.send('Here are your products');
});

// ส่งออก router
module.exports = router;