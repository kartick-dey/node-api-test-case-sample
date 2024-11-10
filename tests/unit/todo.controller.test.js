const todoController = require('../../controllers/todo.controller');
const todoSvc = require('../../services/todo.service');
const newTodo = require('../mock-data/new-todo.json');

describe('ToDo Controller', () => {
    describe('createToDo', () => {
        it('should be a function', () => {
            expect(typeof todoController.createToDo).toBe('function');
        });

        it('should call todoSvc.createToDo with the correct parameters', () => {
            const req = { body: newTodo };
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            };
            const next = jest.fn();

            todoSvc.createToDo = jest.fn();

            todoController.createToDo(req, res, next);

            expect(todoSvc.createToDo).toHaveBeenCalledWith(newTodo);
            expect(res.status).toHaveBeenCalledWith(201);
            expect(res.json).toHaveBeenCalledWith({
                message: 'To do created successfully',
            });
        });
    });

    describe('getToDos', () => {
        it('should be a function', () => {
            expect(typeof todoController.getToDos).toBe('function');
        });

        it('should call todoSvc.getTodoList and return the list of todos', () => {
            const req = {};
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            };
            const next = jest.fn();

            const todoList = [newTodo];
            todoSvc.getTodoList = jest.fn().mockReturnValue(todoList);

            todoController.getToDos(req, res, next);

            expect(todoSvc.getTodoList).toHaveBeenCalled();
            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith(todoList);
        });
    });
});
