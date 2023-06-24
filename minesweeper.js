function canvas_getElement() {
	return document.getElementById('canvas_main')
}
function canvas_getContext() {
	return getCanvas().getContext('2d')
}

function board_render() {

	// init
	canvas = canvas_getContext()
	canvas.fillStyle = 'rgb(230,230,230)'
	canvas.fillRect(0, 0, 800, 800)

	// create lines

	// test
	getCanvas().addEventListener('mousedown', e => console.log([e.offsetX, e.offsetY]))

}

window.onload = board_render()

