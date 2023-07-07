import * as canvasElement from './canvasElement.js';

export function init() {

	// init
	let ctx = canvasElement.getCanvasContext();
	ctx.fillStyle = 'rgb(200,200,200)';
	ctx.fillRect(0, 0, 800, 800);

	// create lines
	ctx.fillStyle = 'rgb(0,0,0)';
	for (let i=20; i<800; i+=20) {
		ctx.fillRect(i, 0, 1, 800);
		ctx.fillRect(0, i, 800, 1);
	}
}

export function updateBlock(block) {
	let ctx = canvasElement.getCanvasContext();
	let rp = block.toRealPixelPoints();
	ctx.fillStyle = 'rgb(255,0,0)';
	ctx.fillRect(rp[0]+1, rp[1]+1, 19, 19);

	if (block.isCleared) {
		ctx.fillStyle = 'rgb(230,230,230)';
		ctx.fillRect(rp[0]+1, rp[1]+1, 19, 19);
		ctx.fillStyle = 'rgb(0,0,0)';
		ctx.fillText(block.nearCount, rp[0]+1, rp[1]+1);
	} else {
		ctx.fillStyle = 'rgb(200,200,200)';
		ctx.fillRect(rp[0]+1, rp[1]+1, 19, 19);
	}
}
