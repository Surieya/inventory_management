import expressAsyncHandler from 'express-async-handler';
import bcrypt from 'bcrypt';
import { getToken } from '../jwt.js';

import pool from '../database.js';




const createInvUser = expressAsyncHandler(async (req, res) => {
    const { name, password } = req.body;
    const data = await pool.query('SELECT * from inventoryteam WHERE name=$1', [name]);
    
    if (data.rows.length > 0) {
        res.status(401);
        throw new Error('user with this email already exist');
    } else {
        const pass = await bcrypt.hash(password, 10);
        const result = await pool.query('INSERT INTO inventoryteam (name,password) VALUES($1,$2) RETURNING *', [name, pass])
        return res.status(201).json(
            result.rows[0]
        )
    }
})

const createUser = expressAsyncHandler(async(req, res) => {
        const { name, password } = req.body;
    const data = await pool.query('SELECT * from deliveryteam WHERE name=$1', [name]);
    
    if (data.rows.length > 0) {
        res.status(401);
        throw new Error('user with this email already exist');
    } else {
        const pass = await bcrypt.hash(password, 10);
        const result = await pool.query('INSERT INTO deliveryteam (name,password,orders) VALUES($1,$2) RETURNING *', [name, pass,[]])
        return res.status(201).json(
            result.rows[0]
        )
    }
})

const loginUser = expressAsyncHandler(async (req, res) => {
    const { name, password } = req.body;
    
    const data = await pool.query('SELECT * FROM deliveryteam WHERE name=$1', [name]);
    // console.log(data.rows);
    if (data.rows.length != 0) {
        if (!(await bcrypt.compare(password, data.rows[0].password))) {
            res.status(401)
            throw new Error('Password Incorrect');
        } else {
            
            const accessToken = getToken(data.rows[0].name, data.rows[0].id);
            return res.status(200).json({
                name: data.rows[0].name,
                accessToken: accessToken,
                role:"DeliveryT"
            }
                
            )

        }
    }else{
        res.status(400)
        throw new Error("user Doesn't exist");
    }
}
)

const loginInvUser = expressAsyncHandler(async (req, res) => {
    const { name, password } = req.body;
    // console.log(name,password)
    const data = await pool.query('SELECT * FROM inventoryteam WHERE name=$1', [name]);
    // console.log(data.rows);

    if (data.rows.length != 0) {
        if (!(await bcrypt.compare(password, data.rows[0].password))) {
            res.status(401)
            throw new Error('Password Incorrect');
        } else {
            
            const accessToken = getToken(data.rows[0].name, data.rows[0].id);
            return res.status(200).json({
                name: data.rows[0].name,
                accessToken: accessToken,
                role:"InventoryT"
            }
                
            )

        }
    } else{
        res.status(400)
        throw new Error("user Doesn't exist");
    }
    
})


export {
    loginInvUser,
    loginUser,
    createInvUser,
    createUser
}