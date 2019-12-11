const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const db = require('../database');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', express.static('public'));

app.get('/', (req, res) => {
    console.log(req.body);
})

app.post('/todos', (req, res) => {
    const { newTodo, completionDate } = req.body.params;
    const today = new Date();
    const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    const task = {
        newTodo,
        createdDate: date,
        completionDate
    }

    db.insertTask(task, (err, todo) => {
        if (err) {
            console.log('error inserting to db', err);
            res.end();
        }
        res.statusCode = 201;
        res.send('server completed insertion');
    })
})

app.listen(port, () => console.log(`app is now listening on port ${port}`));