import { renderTodos } from './ui';
import { getAllTodos } from './data';

export function onLoadEventHandler() {
    renderTodos(getAllTodos());
}