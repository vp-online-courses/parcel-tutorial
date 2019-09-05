import initialTodos from '../initial-todos.json';

let data = initialTodos;

export function getAllTodos() {
    return data;
}

export function addTodo(todo) {
    data.push(todo);
}

export function removeTodo(id) {
	data = data.filter(function (item) {
		return item.id !== id;
	});
}