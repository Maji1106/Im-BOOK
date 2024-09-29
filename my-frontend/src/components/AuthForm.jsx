import React, { useState } from 'react';
import axios from 'axios';

const AuthForm = ({ isLogin }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = isLogin 
                ? await axios.post('http://localhost:5000/api/auth/login', { username, password })
                : await axios.post('http://localhost:5000/api/auth/register', { username, email, password });
            
            // Save token
            localStorage.setItem('token', response.data.token);
            // Redirect or update user state
        } catch (error) {
            // Handle error
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="ชื่อผู้ใช้"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
            />
            {!isLogin && (
                <input
                    type="email"
                    placeholder="อีเมล"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            )}
            <input
                type="password"
                placeholder="รหัสผ่าน"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <button type="submit">{isLogin ? 'เข้าสู่ระบบ' : 'สมัครสมาชิก'}</button>
        </form>
    );
};

export default AuthForm;
