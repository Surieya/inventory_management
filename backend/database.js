import pg from "pg";
import dotenv from 'dotenv'

dotenv.config();

const Pool = pg.Pool;



const pool = new Pool({
      port: process.env.PG_PORT,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    user: process.env.PG_USER,
})



const createConnection = async () => {
    let connection;
    try {
        connection = await pool.connect();
        console.log('DB Connected');
    } catch (err) {
        console.log('DB ERROR');
    }
    finally {
        connection.release();
    }
}

export { createConnection };
export default pool;