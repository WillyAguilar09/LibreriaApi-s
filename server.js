const { Console } = require('console');
const express=require('express');
const app=express();
const PORT =3000;

app.get('/productos/:id/:nombre/:precio',(req,res)=>{
    const id=req.params.id;
    const nombre=req.params.nombre;
    const precio=req.params.precio;
    
    res.status(200).json({id:id,nombre:nombre,precio:precio});
})

app.get('/api/usuarios', (req, res)=>{

    /*Objet JSON*/
    res.status(200).json(
        {
            id:1,
            nombre:"Juan",
            email:"juan@email.com"
        });
    
});
app.get('/api/categorias', (req, res) => {
    res.json([{
        "id": 1,
        "nombre": "Electrónica ",


    }])
});

app.listen(PORT,()=>{
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

