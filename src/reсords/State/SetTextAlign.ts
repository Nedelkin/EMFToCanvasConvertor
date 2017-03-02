import {Record} from "../Record";
export class SetTextAlign  extends Record {
	constructor() {
		super();
		console.log("SetTextAlign");
	}

	protected structure = {
		Type: 32,
		Size: 32,
		TextAlignmentMode: 32
	};
}