import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const ProductDetailPage = () => {
    const { id } = useParams(); // รับ ID ของผลิตภัณฑ์จาก URL
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetchProduct();
    }, [id]);

    const fetchProduct = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/api/products/${id}`);
            setProduct(response.data);
        } catch (error) {
            console.error('Error fetching product:', error);
        }
    };

    const handleDelete = async () => {
        if (window.confirm('คุณต้องการลบผลิตภัณฑ์นี้หรือไม่?')) {
            try {
                await axios.delete(`http://localhost:5000/api/products/${id}`);
                alert('ผลิตภัณฑ์ถูกลบเรียบร้อยแล้ว');
                navigate('/products'); // ไปยังหน้าแสดงรายการผลิตภัณฑ์หลังจากลบ
            } catch (error) {
                console.error('Error deleting product:', error);
                alert('เกิดข้อผิดพลาดในการลบผลิตภัณฑ์');
            }
        }
    };

    if (!product) return <div>Loading...</div>;

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p>{product.description}</p>
            <p className="mt-4">ราคา: {product.price} บาท</p>

            <button
                onClick={handleDelete}
                className="bg-red-500 text-white p-2 rounded mt-4"
            >
                ลบผลิตภัณฑ์
            </button>
        </div>
    );
};

export default ProductDetailPage;
