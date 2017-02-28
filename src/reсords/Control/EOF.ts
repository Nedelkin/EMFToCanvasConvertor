export class EOF {
	constructor() {
		console.log("EOF");
	}

	private structure = {
		Type: 32,
		Size: 32,
		nPalEntries: 32,
		offPalEntries: 32,
		PaletteBuffer: "variable",
		SizeLast: 32,
	};
}