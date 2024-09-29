import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            const response = await axios.get(`http://localhost:5000/api/products/${id}`);
            setProduct(response.data);
        };

        fetchProduct();
    }, [id]);

    if (!product) return <div>Loading...</div>;

    return (
        <div>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>ราคา: {product.price} บาท</p>
            <p>จำนวน: {product.quantity}</p>
            {/* สามารถเพิ่มปุ่มสำหรับแก้ไขและลบผลิตภัณฑ์ */}
        </div>
    );
};

export default ProductDetail;
