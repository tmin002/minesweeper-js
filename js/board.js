import * as canvas from './canvas.js'

export function render() {

	// init
	let ctx = canvas.getCanvasContext();
	ctx.fillStyle = 'rgb(200,200,200)';
	ctx.fillRect(0, 0, 800, 800);

	// create lines
	ctx.fillStyle = 'rgb(0,0,0)';
	for (let i=20; i<800; i+=20) {
		ctx.fillRect(i, 0, 1, 800);
		ctx.fillRect(0, i, 800, 1);
	}
}

export function Block(isMine) {
	this.isMine = isMine;
	this.isCleared = false;
	this.isFlagged = false;
	this.nearCount = 0;
}

export function Board(mineCount = 400) {

	// map: literally a map of mines.
	this.map = [];
	for (let i=0; i<40; i++)
		this.map.push([]);

	// initMap(): create map.
	this.initMap = () => {

		let unselectedIndex = []
		for (let i=0; i<40*40; i++)
			unselectedIndex.push(i);

		// Push blocks
		for (let i=0; i<40; i++)
			for (let j=0; j<40; j++)
				this.map[i][j] = new Block(false);

		// Determinte mine location
		for (let i=0; i<mineCount; i++) {
			let randomIndex1D = Math.floor(Math.random() * (unselectedIndex.length - 1));
			let randomIndexRow = Math.floor(randomIndex1D / 40);
			let randomIndexCol = randomIndex1D % 40;
			this.map[randomIndexRow][randomIndexCol].isMine = true;
		}

		// Calculate nearing mine count
		let isMineAt = (i,j) => {
			if (i<0 || i>=40 || j<0 || j>=40) 
				return false;
			else
				return this.map[i][j].isMine;
		}

		for (let i=0; i<40; i++) {
			for (let j=0; j<40; j++) {
				let nearingMineCount = 0;

				isMineAt(i, j+1) && nearingMineCount++;
				isMineAt(i, j-1) && nearingMineCount++;
				isMineAt(i-1, j+1) && nearingMineCount++;
				isMineAt(i-1, j) && nearingMineCount++;
				isMineAt(i-1, j-1) && nearingMineCount++;
				isMineAt(i+1, j+1) && nearingMineCount++;
				isMineAt(i+1, j) && nearingMineCount++;
				isMineAt(i+1, j-1) && nearingMineCount++;

				this.map[i][j].nearCount = nearingMineCount;
			}
		}
		// Done.
	}


}
