const express = require('express');

const TodoController = require('./controllers/todo.controller');
const cors = require('cors');

const app = express();

app.use(express.json());

app.use(cors());

app.get('/hello-world', (req, res) => {
    res.json('Hello World');
});

app.post('/create/todo', TodoController.createToDo);
app.get('/todos', TodoController.getToDos);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});