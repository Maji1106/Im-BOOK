// src/components/Login.js
import React, { useState } from 'react';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });
            if (!response.ok) {
                throw new Error('Invalid credentials');
            }
            const data = await response.json();
            localStorage.setItem('token', data.token); // เก็บ JWT ใน localStorage
            alert('Login successful');
            // Redirect หรือทำอะไรหลังจากล็อกอินสำเร็จ
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow-md">
                <h2 className="mb-4 text-xl">Login</h2>
                {error && <p className="text-red-500">{error}</p>}
                <div className="mb-4">
                    <label htmlFor="username" className="block mb-2">Username</label>
                    <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} className="border rounded w-full p-2" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block mb-2">Password</label>
                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="border rounded w-full p-2" required />
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Login</button>
            </form>
        </div>
    );
};

export default Login;
