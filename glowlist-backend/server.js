const express = require('express');
const app = express();
const PORT = 3001;

app.use(express.json());

// Cek server
app.get('/', (req, res) => {
    res.send('GlowList Backend API berjalan! 🔥✨');
});

// Coba endpoint kedua
app.get('/coba', (req, res) => {
    res.send('GlowList Backend API coba sudah berjalan bila! 💗✨');
});

// Jalankan server
app.listen(PORT, () => {
    console.log(`Server GlowList jalan di http://localhost:${PORT}`);
});

