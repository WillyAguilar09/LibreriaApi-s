const { Console } = require('console');
const express=require('express');
const app=express();
const PORT=3000;


app.get('/api/usuarios', (req, res)=>{

    /*Objet JSON*/
    res.status(200).json(
        {
            id:1,
            nombre:"Juan",
            email:"juan@email.com"
        });
    
});

app.listen(PORT,()=>{
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
