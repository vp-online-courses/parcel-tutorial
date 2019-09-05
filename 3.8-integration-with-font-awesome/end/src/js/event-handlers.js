import { renderTodos, clearNewTodoInput, getTodoId } from './ui';
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
}

export function removeTodoEventHandler(event) {
    const id = getTodoId(event.target);
    // First, we need to get an id of the item we want to delete.
    removeTodo(id);
    // Then we can delete this item using its id.
    renderTodos(getAllTodos());
    // Finally, we need to rerender the todo items on the screen.
}

export function toggleTodoEventHandler(event) {
    // First, we need to get an id of the item we want to update.
    const id = getTodoId(event.target);
    const isCompleted = event.target.checked;
    // Then we can update this item using its id.
    updateTodo(id, isCompleted);
    // Finally, we need to rerender the todo items on the screen.
    renderTodos(getAllTodos());
}