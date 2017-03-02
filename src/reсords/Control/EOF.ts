import {Record} from "../Record";
export class EOF extends Record {
	constructor() {
		super();
		console.log("EOF");
	}

	protected structure = {
		Type: 32,
		Size: 32,
		nPalEntries: 32,
		offPalEntries: 32,
		PaletteBuffer: "variable",
		SizeLast: 32,
	};
}