import {Record} from "../Record";
export class FillPath extends Record {
	constructor() {
		super();
		console.log("FillPath")
	}

	protected structure = {
		Type: 32,
		Size: 32,
		Bounds: 128
	};
}