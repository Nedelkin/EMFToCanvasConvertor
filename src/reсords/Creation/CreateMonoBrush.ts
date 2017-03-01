export class CreateMonoBrush {
	constructor() {
		console.log("CreateMonoBrush");
	}

	private structure = {
		Type: 32,
		Size: 32,
		ihBrush: 32,
		Usage: 32,
		offBmi: 32,
		cbBmi: 32,
		offBits: 32,
		cbBits: 32,
		BitmapBuffer: "variable"
	};
}