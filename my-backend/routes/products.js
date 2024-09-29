const express = require('express');
const Product = require('../models/Product');
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');
const router = express.Router();

// Create Product
router.post('/', authMiddleware, roleMiddleware(['admin']), async (req, res) => {
    const { name, description, price } = req.body;

    const newProduct = new Product({
        name,
        description,
        price
    });

    try {
        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Read Products
router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Read Product by ID
router.get('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const product = await Product.findById(id);
        if (!product) return res.status(404).json({ message: 'Product not found' });
        res.json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update Product
router.put('/:id', authMiddleware, roleMiddleware(['admin']), async (req, res) => {
    const { id } = req.params;
    const { name, description, price } = req.body;

    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, { name, description, price }, { new: true });
        if (!updatedProduct) return res.status(404).json({ message: 'Product not found' });
        res.json(updatedProduct);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Delete Product
router.delete('/:id', authMiddleware, roleMiddleware(['admin']), async (req, res) => {
    const { id } = req.params;

    try {
        const deletedProduct = await Product.findByIdAndDelete(id);
        if (!deletedProduct) return res.status(404).json({ message: 'Product not found' });
        res.json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Search products by name or description
router.get('/search', async (req, res) => {
    const { query } = req.query; // รับคีย์เวิร์ดในการค้นหา
    try {
        // ค้นหาผลิตภัณฑ์ที่มีคำในชื่อหรือคำอธิบายที่ตรงกับคีย์เวิร์ด
        const products = await Product.find({
            $or: [
                { name: { $regex: query, $options: 'i' } }, // ค้นหาจากชื่อ (กรณีไม่สนใจตัวอักษรเล็กใหญ่)
                { description: { $regex: query, $options: 'i' } }, // ค้นหาจากคำอธิบาย
            ],
        });
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
