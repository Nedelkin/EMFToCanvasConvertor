export class DrawEscape {
	constructor() {
		console.log("DrawEscape");
	}

	private structure = {
		Type: 32,
		Size: 32,
		iEscape: 32,
		cjIn: 32,
		Data: "variable"
	};
}