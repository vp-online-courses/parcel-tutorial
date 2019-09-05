import initialTodos from '../initial-todos.json';
import '../css/index.css';

function renderTodos(todos) {
    const renderedItemArray = todos.map(function (todo) {
        const className = todo.completed ? 'completed' : '';
        return `
            <li data-id="${todo.id}" class="${className}">
                <span class="custom-checkbox"></span>
                <label>${todo.title}</label>
            </li>
        `;
    });
    document.querySelector('.todo-list').innerHTML = renderedItemArray.join('');
}

window.addEventListener('load', function () {
    renderTodos(initialTodos);
});