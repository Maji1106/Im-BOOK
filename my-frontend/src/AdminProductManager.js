import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminProductManager = () => {
    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState({ name: '', price: '' });
    const token = localStorage.getItem('token'); // เก็บ token หลังจากล็อกอิน

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('/api/products', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        fetchProducts();
    }, [token]);

    const handleAddProduct = async () => {
        try {
            await axios.post('/api/products', newProduct, {
                headers: { Authorization: `Bearer ${token}` }
            });
            alert('Product added!');
        } catch (error) {
            console.error('Error adding product:', error);
        }
    };

    const handleDeleteProduct = async (id) => {
        try {
            await axios.delete(`/api/products/${id}`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            alert('Product deleted!');
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    return (
        <div>
            <h2>Admin Product Manager</h2>
            <div>
                <input 
                    type="text"
                    placeholder="Product Name"
                    value={newProduct.name}
                    onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                />
                <input 
                    type="number"
                    placeholder="Price"
                    value={newProduct.price}
                    onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                />
                <button onClick={handleAddProduct}>Add Product</button>
            </div>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        {product.name} - ${product.price}
                        <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdminProductManager;
