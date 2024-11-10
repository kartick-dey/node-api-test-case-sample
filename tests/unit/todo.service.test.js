const { createToDo, getTodoList } = require('../../services/todo.service');

describe('Todo Service', () => {
    describe('createToDo', () => {
        it('should add a new todo item to the todoData array', () => {
            const newTodo = {
                id: 6,
                title: 'Test Todo',
                completed: false,
            };
            const initialLength = getTodoList().length;
            console.log(`initialLength: `, initialLength);
            createToDo(newTodo);
            const updatedTodoList = getTodoList();
            console.log(`updatedTodoList: `, updatedTodoList);
            expect(updatedTodoList.length).toBe(initialLength + 1);
            expect(updatedTodoList[updatedTodoList.length - 1]).toEqual(
                newTodo
            );
        });
    });

    describe('getTodoList', () => {
        it('should return the todoData array', () => {
            const todoList = getTodoList();
            console.log(`todoList: `, todoList);
            expect(todoList).toEqual([
                { id: 3, title: 'New Todo', completed: false },
                { id: 4, title: 'Another Todo', completed: true },
                { id: 5, title: 'Yet Another Todo', completed: false },
                { id: 6, title: 'Test Todo', completed: false },
            ]);
        });
    });
});
