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

// Location object that has converted 
// value of real pixel-points mapped to corresponding blocks of board. (0 to size-1)
export function Point(x,y) {
	this.x = x;
	this.y = y;
}
Point.createFromPixelPoints = (pX, pY) => {
	return new Point(Math.floor(pX/20), Math.floor(pY/20));
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
