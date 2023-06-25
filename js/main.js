import {render} from './board.js';
import {Board} from './board.js';
import {bindCanvasEvents} from './canvas.js';
import {getCanvasContext} from './canvas.js';

// minesweeper board map
const mineBoard = new Board(50);

window.onload = () => {
	render();
	bindCanvasEvents();
	mineBoard.initMap();
	
	let x = getCanvasContext();
	for (let i=0; i<40; i++) {
		for (let j=0; j<40; j++) {
			let block = mineBoard.map[i][j];

			if (block.isMine) {
				x.fillStyle = 'rgb(255,0,0)';
				x.fillText('m', i*20, j*20); 
				continue;
			}

			x.fillStyle = 'rgb(0,255,0)';
			x.fillText(String(block.nearCount), i*20, j*20); 
		}
	}

}
