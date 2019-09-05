import { onLoadEventHandler, newTodoEventHandler, removeTodoEventHandler, toggleTodoEventListener, confirmRemoveEventHandler } from './event-handlers';
import $ from 'jquery';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { isGoogleAnalyticsEnabled } from './check-feature-service';
import '../css/index.scss';

library.add(faCheck);
dom.watch();


$(window).on('load', onLoadEventHandler);
$('.new-todo').on('change', newTodoEventHandler);
$(document).on('click', '.delete', removeTodoEventHandler);
$(document).on('click', '.real-checkbox', toggleTodoEventListener);
$('#modal-delete-button').on('click', confirmRemoveEventHandler);

if (isGoogleAnalyticsEnabled()) {
    console.log('Google Analytics is enabled');
} else {
    console.log('Google Analytics is disabled');
}