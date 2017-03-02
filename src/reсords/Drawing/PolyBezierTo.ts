import {Record} from "../Record";
export class PolyBezierTo extends Record {
	constructor() {
		super();
		console.log("PolyBezierTo");
	}

	protected structure = {
		Type: 32,
		Size: 32,
		Bounds: 128,
		Count: 32,
		aPoints: "variable"
	}
}