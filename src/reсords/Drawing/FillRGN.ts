export class FillRGN {
	constructor() {
		console.log("FillRGN");
	}

	private structure = {
		Type: 32,
		Size: 32,
		Bounds: 128,
		RgnDataSize: 32,
		ihBrush: 32,
		RgnData: "variable"
	};
}