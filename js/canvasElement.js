import {Point} from './board.js';

export function getCanvasElement() {
	return document.getElementById('canvas_main');
}
export function getCanvasContext() {
	return getCanvasElement().getContext('2d');
}
export function bindCanvasEvents() {
	let ce = getCanvasElement();
	ce.addEventListener('mousedown', e => onMouseDown(e.button, e.offsetX, e.offsetY));
	ce.addEventListener('contextmenu', e => e.preventDefault());
}

// mouse down listener
var mouseDownCallBack = null;
var lastMouseDownPoint = null;
export function addOnMouseDownEvent(callback) {
	mouseDownCallBack = callback;
}

// Direct mouse down event callback function
function onMouseDown(button, offsetX, offsetY) {
	lastMouseDownPoint = Point.createFromPixelPoints(offsetX, offsetY);
	mouseDownCallBack(button, lastMouseDownPoint);	
}
