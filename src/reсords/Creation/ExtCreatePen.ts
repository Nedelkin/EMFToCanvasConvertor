export class ExtCreatePen {
	constructor() {
		console.log("ExtCreatePen");
	}

	private structure = {
		Type: 32,
		Size: 32,
		ihPen: 32,
		offBmi: 32,
		cbBmi: 32,
		offBits: 32,
		cbBits: 32,
		elp: "variable",
		BitmapBuffer: "variable"
	};
}