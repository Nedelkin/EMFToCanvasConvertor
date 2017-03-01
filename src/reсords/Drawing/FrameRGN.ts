export class FrameRGN {
	constructor() {
		console.log('FrameRGN')
	}

	private structure = {
		Type: 32,
		Size: 32,
		Bounds: 128,
		RgnDataSize: 32,
		ihBrush: 32,
		Width: 32,
		Height: 32,
		RgnData: "variable"
	};
}