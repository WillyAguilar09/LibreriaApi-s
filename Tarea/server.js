const express = require ('express');
const app = express();
const PORT = 3002;

app.get('/api/categorias', (req, res) => {
    res.json([{
        "id": 1,
        "nombre": "Electrónica ",


    }])
});

app.listen(PORT, () => {
    console.log(`servidor corriendo en http://localhost:${PORT}`);
}); 