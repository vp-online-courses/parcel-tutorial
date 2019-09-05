import initialTodos from '../initial-todos.json';

let data = initialTodos;

export function getAllTodos() {
    return data;
}

export function addTodo(todo) {
    data.push(todo);
}