export class SetPaletteEntries {
	constructor() {
		console.log("SetPaletteEntries");
	}
	private structure = {
		Type: 32,
		Size: 32,
		ihPal: 32,
		Start: 32,
		NumberofEntries: 32,
		aPalEntries: "variable"
	};
}