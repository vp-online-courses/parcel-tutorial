import { renderTodos, clearNewTodoInput, getTodoId, showAlert } from './ui';
import { getAllTodos, addTodo, removeTodo, updateTodo } from './data';
import $ from 'jquery';
import popper from 'popper.js';
import bootstrap from 'bootstrap';
import { capitalize } from 'lodash-es';

function trim(value) {
    return value.trim();
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
    const todoId = getTodoId(event.target);
    console.log(todoId);
    $('#modal-delete-button').data('todo-id', todoId);
    $('#modal-delete-todo').modal('show');
}

export function confirmRemoveEventHandler(event) {
    const id = $('#modal-delete-button').data('todo-id');
    console.log(id);
    removeTodo(id);
    renderTodos(getAllTodos());
    $('#modal-delete-todo').modal('hide');
}

export function toggleTodoEventListener(event) {
    const id = getTodoId(event.target);
    const isCompleted = event.target.checked;
    updateTodo(id, isCompleted);
    renderTodos(getAllTodos());
}