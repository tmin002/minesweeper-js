import {render} from './board.js';
import {Board} from './board.js';
import {bindCanvasEvents} from './canvas.js';
import {getCanvasContext} from './canvas.js';

// minesweeper board map
const mineBoard = new Board(500);

window.onload = () => {
	render();
	bindCanvasEvents();
	mineBoard.initMap();
	
	let x = getCanvasContext();
	for (let i=0; i<40; i++) {
		for (let j=0; j<40; j++) {

		}
	}

}
