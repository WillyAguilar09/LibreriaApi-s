const express=require('express');
const app=express();
const PORT =3000;

app.get('/productos/:id/:nombre/:precio',(req,res)=>{
    const id=req.params.id;
    const nombre=req.params.nombre;
    const precio=req.params.precio;
    
    res.status(200).json({id:id,nombre:nombre,precio:precio});
})


// levantar servidor
app.listen(PORT,()=>{
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
})