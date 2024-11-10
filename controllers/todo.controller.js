const todoSvc = require('../services/todo.service');

exports.createToDo = (req, res, next) => {
    todoSvc.createToDo(req.body)
    res.status(201).json({
        message: 'To do created successfully'
    });
};

exports.getToDos = (req, res, next) => {
    const list = todoSvc.getTodoList()
    res.status(200).json(list);
};