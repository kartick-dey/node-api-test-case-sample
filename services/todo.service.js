

const todoData = [
    {
        id: 3,
        title: 'New Todo',
        completed: false,
    },
    {
        id: 4,
        title: 'Another Todo',
        completed: true,
    },
    {
        id: 5,
        title: 'Yet Another Todo',
        completed: false,
    }
];

exports.createToDo = (newTodo) => {
    return todoData.push(newTodo);
};

exports.getTodoList = () => {
    return todoData;
};
