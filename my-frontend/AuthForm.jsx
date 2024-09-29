const handleSubmit = async (e) => {
    e.preventDefault(); // ป้องกันการรีเฟรชหน้า

    // ตรวจสอบว่ามีการกรอกข้อมูลครบถ้วน
    if (!username || (isLogin ? false : !email) || !password) {
        alert("กรุณากรอกข้อมูลให้ครบถ้วน");
        return; // ออกจากฟังก์ชันถ้าข้อมูลไม่ครบ
    }

    try {
        const response = isLogin 
            ? await axios.post('http://localhost:5000/api/auth/login', { username, password })
            : await axios.post('http://localhost:5000/api/auth/register', { username, email, password });

        // บันทึก JWT Token ใน Local Storage
        localStorage.setItem('token', response.data.token);

        // นำทางไปยังหน้า Homepage หรือหน้าอื่นๆ
        window.location.href = '/'; // หรือใช้ navigate('/') ถ้าใช้ react-router-dom

    } catch (error) {
        console.error('Error:', error.response.data.message);
        alert(`เกิดข้อผิดพลาด: ${error.response.data.message}`);
    }
};
