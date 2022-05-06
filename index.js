const express = require('express');

const app = express();
const pool = require('./db');

app.get('products', async (req,res)=>{
    const connection = await pool.getconnection(); //obtenemos una conexion 
    const query = 'SELECT * FROM products'; //consulta a la base de datos
    const rows = await connection.query(query) //devuelve las filas de la consulta 
    res.status(200).json(rows); //respuesa de la peticion hacia el cliente
})

app.post('/products', async (req,res)=>{ //recibe una peticion post para crear un producto 
    const connection = await pool.getconnection();
    const query = 'INSERT INTO products(name) SET (?)'; //inserta los datos en la tabla products
    const row = await connection.query(query, [req.body.name]); //muesrta los datos que se insertaron
    res.status(200).json(row);
})

app.listen(3000, () => {
  console.log('Listening on port 3000');
});