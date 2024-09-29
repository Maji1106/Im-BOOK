// authMiddleware.js
const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) return res.status(401).send({ message: 'Unauthorized' });

    try {
        const decoded = jwt.verify(token, 'your_jwt_secret'); // เปลี่ยนเป็น secret ของคุณ
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).send({ message: 'Invalid token' });
    }
};

module.exports = authMiddleware;
