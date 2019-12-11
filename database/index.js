const mysql = require('mysql');
require("dotenv").config();
const user = process.env.DATABASE_USER;
const password = process.env.DATABASE_PASSWORD;


const conn = mysql.createConnection({
    host: 'localhost',
    user: user,
    password: password,
    database: 'tasks'
});

conn.connect();

//db query functions here

const getTodos = (obj, cb ) => {
    const queryString = `SELECT * FROM todos`;

    conn.query(queryString, (err, todos) => {
        if (err) {
            cb(err);
        }
        cb(null, todos);
    })
}

const insertTask = (task, cb) => {
    console.log(task);
    const queryString = `INSERT INTO todos (todo, createdDate, completionDate) VALUE 
    ('${task.newTodo}', '${task.createdDate}', '${task.completionDate}');`

    conn.query(queryString, (err, res) => {
        if (err) {
            cb(err);
        }
        console.log(`successfully inserted ${task.newTodo} to db`);
        cb(null, err);
    })
}


module.exports = { insertTask, getTodos };