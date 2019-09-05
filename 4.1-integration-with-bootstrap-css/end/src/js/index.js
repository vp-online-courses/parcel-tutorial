import { onLoadEventHandler, newTodoEventHandler, removeTodoEventHandler, toggleTodoEventListener } from './event-handlers';
import $ from 'jquery';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import '../css/index.scss';

library.add(faCheck);
dom.watch();


$(window).on('load', onLoadEventHandler);
$('.new-todo').on('change', newTodoEventHandler);
$(document).on('click', '.delete', removeTodoEventHandler);
$(document).on('click', '.real-checkbox', toggleTodoEventListener);