import { renderTodos, clearNewTodoInput } from './ui';
import { getAllTodos, addTodo } from './data';

function trim(value) {
    return value.trim();
}

function capitalize(value) {
    return value[0].toUpperCase() + value.substr(1);
}

export function onLoadEventHandler() {
    renderTodos(getAllTodos());
}

export function newTodoEventHandler(event) {
    let title = event.target.value;
    title = capitalize(trim(title));
    addTodo({
        id: Date.now(),
        title: title,
        completed: false
    });
    renderTodos(getAllTodos());
    clearNewTodoInput();
}