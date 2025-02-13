const express=require('express');
const app=express();
const PORT =3000;

app.get('/usuarios/:id/:edad/:email',(req,res)=>{
    const id=req.params.id;
    const edad=req.params.edad;
    const email=req.params.email;
    
    res.status(200).json({id:id,edad:edad,email:email});
})


// levantar servidor
app.listen(PORT,()=>{
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
})