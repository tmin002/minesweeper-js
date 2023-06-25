function canvas_getElement() {
	return document.getElementById('canvas_main')
}
function canvas_getContext() {
	console.log(canvas_getElement())
	return canvas_getElement().getContext('2d')
}

function block(x, y, flagged, cleared) {
	this.x = x
	this.y = y
	this.flagged = flagged
	this.ismine = flagged
	this.cleared = cleared
}

var board_
var board_selected_location = []

function board_render() {

	// init
	canvas = canvas_getContext()
	canvas.fillStyle = 'rgb(200,200,200)'
	canvas.fillRect(0, 0, 800, 800)

	// create lines
	canvas.fillStyle = 'rgb(0,0,0)'
	for (let i=20; i<800; i+=20) {
		canvas.fillRect(i, 0, 1, 800)
		canvas.fillRect(0, i, 800, 1)
	}

	// bound event
	canvas_getElement().addEventListener('mousedown', e => board_onmousedown(e.button, e.offsetX, e.offsetY))

}

function board_onmousedown(button, offsetX, offsetY) {
	// button value 0: left click, 1: right click

	console.log(button, offsetX, offsetY)	
}

window.onload = board_render

