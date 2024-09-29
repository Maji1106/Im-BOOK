const jwt = require('jsonwebtoken');

// ตรวจสอบ JWT
const authenticateJWT = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) return res.sendStatus(401);

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
};

// ตรวจสอบสิทธิ์การเข้าถึงของแอดมิน
const isAdmin = (req, res, next) => {
    if (req.user.role !== 'admin') return res.sendStatus(403);
    next();
};

module.exports = { authenticateJWT, isAdmin };
