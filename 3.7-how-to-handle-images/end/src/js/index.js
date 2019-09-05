import { onLoadEventHandler, newTodoEventHandler, removeTodoEventHandler } from './event-handlers';
import $ from 'jquery';
import '../css/index.scss';


$(window).on('load', onLoadEventHandler);
$('.new-todo').on('change', newTodoEventHandler);
$(document).on('click', '.delete', removeTodoEventHandler);