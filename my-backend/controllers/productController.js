const db = require('./db');

// ดึงข้อมูลสินค้าทั้งหมด
const getProducts = (req, res) => {
    db.query('SELECT * FROM products', (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
};

// เพิ่มสินค้า
const createProduct = (req, res) => {
    const { name, price } = req.body;
    db.query('INSERT INTO products (name, price) VALUES (?, ?)', [name, price], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: 'Product created successfully!' });
    });
};

// อัปเดตสินค้า
const updateProduct = (req, res) => {
    const { name, price } = req.body;
    db.query('UPDATE products SET name = ?, price = ? WHERE id = ?', [name, price, req.params.id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Product updated successfully!' });
    });
};

// ลบสินค้า
const deleteProduct = (req, res) => {
    db.query('DELETE FROM products WHERE id = ?', [req.params.id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Product deleted successfully!' });
    });
};

module.exports = { getProducts, createProduct, updateProduct, deleteProduct };
