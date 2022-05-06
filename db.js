const mariadb=require('mariadb'); 

const pool = mariadb.createPool({ //creamos un pool de conexiones
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'mypassword',
    database: 'dbcoder'
})

async function getconnection(){
    try {
        const connection= await pool.getConnection();
        return connection;
    } catch (error) {
        console.log(error);
        
    }
    
    //va a conectarse a nuestra base de datos para poder hacer las consultas
}

module.exports = {getconnection};