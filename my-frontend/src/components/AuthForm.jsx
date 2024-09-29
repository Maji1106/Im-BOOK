import React, { useState } from 'react';
import axios from 'axios';

const AuthForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(true);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = isLogin ? '/api/login' : '/api/register';
        try {
            const response = await axios.post(url, { username, password });
            console.log('Response:', response.data);
            if (isLogin) {
                localStorage.setItem('token', response.data.token);
            } else {
                alert('User registered successfully!');
            }
        } catch (error) {
            console.error('Error:', error.response?.data?.message);
        }
    };

    return (
        <div>
            <h2>{isLogin ? 'Login' : 'Register'}</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input 
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
            </form>
            <button onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? 'Go to Register' : 'Go to Login'}
            </button>
        </div>
    );
};

export default AuthForm;
