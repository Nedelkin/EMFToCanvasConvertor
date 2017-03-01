export class ExtEscape {
	constructor() {
		console.log("ExtEscape")
	}

	private structure = {
		Type: 32,
		Size: 32,
		iEscape: 32,
		cjIn: 32,
		Data: "variable"
	}
}