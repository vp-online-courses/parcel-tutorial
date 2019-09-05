export function renderTodos(todos) {
    const renderedItemArray = todos.map(function (todo) {
        const className = todo.completed ? 'completed' : '';
        const isCompleted = todo.completed ? 'checked' : '';
        return `
            <li data-id="${todo.id}" class="${className}">
                <span class="custom-checkbox">
                    <i class="fas fa-check"></i>
                    <input class="real-checkbox" type="checkbox" ${isCompleted}>
                </span>
                <label>${todo.title}</label>
                <span class="delete"></span>
            </li>
        `;
    });
    document.querySelector('.todo-list').innerHTML = renderedItemArray.join('');
}

export function clearNewTodoInput() {
    document.querySelector('.new-todo').value = '';
}

export function getTodoId(element) {
	return parseInt(
        element.dataset.id
        || element.parentNode.dataset.id
         || element.parentNode.parentNode.dataset.id
    , 10);
}