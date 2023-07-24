const mysql = require('mysql')
const pool = mysql.createPool({
    host:'localhost',
    user: 'todoadmin',
    password: '1234',
    database: 'todo_list',
    connectionLimit: 10
});

module.exports = pool