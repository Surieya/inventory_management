import express from 'express';
import cors from 'cors'
import errorHandler from './errorHandler.js'
import { createConnection } from './database.js'
import authRoutes from './routes/authRoutes.js'

const PORT = 8000;

createConnection();
const app = express();
app.use(express.json());

app.use(cors({
    option:['http://localhost:5173']
}))


app.use('/api/auth',authRoutes);




app.use(errorHandler)

app.listen(PORT,() => {
   console.log("server running at port"+ PORT)
})

// const express = require('express');
// const mysql = require('mysql2');
// const bodyParser = require('body-parser');
// import bodyParser from 'body-parser';

// const app = express();
// const port = 5000;

// // const db = mysql.createConnection({
// //   host: 'localhost',
// //   user: 'root',
// //   password: 'Kar@db04',
// //   database: 'employees',
// // });

// // db.connect((err) => {
// //   if (err) {
// //     throw err;
// //   }
// //   console.log('MySQL connected');
// // });

// app.use(cors({
//     option:['http://localhost:5173']
// }))

// app.use(bodyParser.json());


// app.post('/submit-form', (req, res) => {
//     const { employeeId, name, department, dob, gender, designation, salary } = req.body;
//     console.log(req.body)



//   const sql = 'INSERT INTO employees (employeeId, name, department, dob, gender, designation, salary) VALUES (?, ?, ?, ?, ?, ?, ?)';
//   db.query(sql, [employeeId, name, department, dob, gender, designation, salary], (err, result) => {
//     if (err) {
//       console.log(err);
//       res.status(500).send('Error occurred while saving data');
//     } else {
//       console.log('Data inserted:', result);
//       res.status(200).send('Data saved successfully');
//     }
//   });
//  });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });