const express = require('express');
const apiRoutes = require('./routes/index');
const cors = require('cors');
const app = express();
const mysql = require('mysql');
const taskTable =require('./model/task');
const pool = require('./model/db');


pool.getConnection(()=> {
    console.log("Database connected")
});
pool.query(taskTable, () => {
    console.log("task table Created");
})
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

app.use('/', apiRoutes);

app.listen(4000, ()=> {
    console.log("Server started on port 4000")
})

