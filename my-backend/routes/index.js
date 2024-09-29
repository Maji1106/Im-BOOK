const express = require('express');
const app = express();
const routes = require('./routes'); // ตรวจสอบให้แน่ใจว่าเส้นทางนี้ถูกต้อง

app.use(express.json());
app.use('/api', routes); // ใช้งาน routes

const PORT = process.env.PORT || 5100;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
