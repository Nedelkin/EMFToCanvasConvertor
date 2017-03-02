import {Record} from "../Record";
export class MoveToEx extends Record {
	constructor() {
		super();
		console.log("MoveToEx");
	}

	protected structure = {
		Type: 32,
		Size: 32,
		Offset: 64
	};
}