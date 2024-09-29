import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditProductPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    useEffect(() => {
        fetchProduct();
    }, [id]);

    const fetchProduct = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/api/products/${id}`);
            setName(response.data.name);
            setDescription(response.data.description);
            setPrice(response.data.price);
        } catch (error) {
            console.error('Error fetching product:', error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:5000/api/products/${id}`, { name, description, price });
            navigate(`/products/${id}`);
        } catch (error) {
            console.error('Error updating product:', error);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold">แก้ไขผลิตภัณฑ์</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="ชื่อผลิตภัณฑ์"
                    className="border p-2 w-full mb-4"
                />
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="คำอธิบาย"
                    className="border p-2 w-full mb-4"
                />
                <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="ราคา"
                    className="border p-2 w-full mb-4"
                />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                    บันทึกการเปลี่ยนแปลง
                </button>
            </form>
        </div>
    );
};

export default EditProductPage;
