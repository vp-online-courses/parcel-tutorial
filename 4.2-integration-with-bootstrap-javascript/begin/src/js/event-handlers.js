import { renderTodos, clearNewTodoInput, getTodoId, showAlert } from './ui';
import { getAllTodos, addTodo, removeTodo, updateTodo } from './data';

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
    title = title |> trim |> capitalize;
    addTodo({
        id: Date.now(),
        title: title,
        completed: false
    });
    renderTodos(getAllTodos());
    clearNewTodoInput();
    showAlert('Todo item has been created successfully');
}

export function removeTodoEventHandler(event) {
    const id = getTodoId(event.target);
    removeTodo(id);
    renderTodos(getAllTodos());
}

export function toggleTodoEventListener(event) {
    const id = getTodoId(event.target);
    const isCompleted = event.target.checked;
    updateTodo(id, isCompleted);
    renderTodos(getAllTodos());
}