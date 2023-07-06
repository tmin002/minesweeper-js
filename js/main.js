import * as render from './canvasRender.js';
import {Board, Point} from './board.js';
import * as canvasElement from './canvasElement.js'; 

// minesweeper board map
const mineBoard = new Board(50);

window.onload = () => {
	render.init();
	canvasElement.bindCanvasEvents();
	mineBoard.initMap();
	
	let x = canvasElement.getCanvasContext();
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

	canvasElement.addOnMouseDownEvent((button, p) => 
		alert(`mousedown button: ${button==0?'left':'right'}, board location: (${p.x},${p.y})`));

}
