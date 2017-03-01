export class PaintRGN {
	constructor() {
		console.log("PaintRGN");
	}

	private structure = {
		Type: 32,
		Size: 32,
		Bounds: 128,
		RgnDataSize: 32,
		RgnData: "variable"
	};
}