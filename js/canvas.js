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

function onMouseDown(button, offsetX, offsetY) {
	// TODO
	console.log(button, offsetX, offsetY);
}
