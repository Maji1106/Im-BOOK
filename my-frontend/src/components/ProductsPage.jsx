import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductsPage = () => {
    const [products, setProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/products');
            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const handleSearch = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/api/products/search?query=${searchQuery}`);
            setProducts(response.data);
        } catch (error) {
            console.error('Error searching products:', error);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('คุณต้องการลบผลิตภัณฑ์นี้หรือไม่?')) {
            try {
                await axios.delete(`http://localhost:5000/api/products/${id}`);
                alert('ผลิตภัณฑ์ถูกลบเรียบร้อยแล้ว');
                fetchProducts(); // เรียกฟังก์ชัน fetchProducts เพื่ออัปเดตข้อมูลใหม่
            } catch (error) {
                console.error('Error deleting product:', error);
                alert('เกิดข้อผิดพลาดในการลบผลิตภัณฑ์');
            }
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">รายการผลิตภัณฑ์</h1>

            <input
                type="text"
                placeholder="ค้นหาผลิตภัณฑ์..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="border p-2 mb-4"
            />
            <button onClick={handleSearch} className="bg-blue-500 text-white p-2 rounded">
                ค้นหา
            </button>

            <div className="grid grid-cols-3 gap-4 mt-4">
                {products.map((product) => (
                    <div key={product._id} className="border p-4 rounded">
                        <h2 className="text-xl font-bold">{product.name}</h2>
                        <p>{product.description}</p>
                        <div className="mt-4">
                            <a href={`/products/${product._id}`} className="text-blue-500 underline mr-4">
                                ดูรายละเอียด
                            </a>
                            <button
                                onClick={() => handleDelete(product._id)}
                                className="bg-red-500 text-white p-2 rounded"
                            >
                                ลบผลิตภัณฑ์
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductsPage;
