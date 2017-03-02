import {Record} from "../Record";
export class EndPath extends Record {
	constructor() {
		super();
		console.log("EndPath");
	}

	protected structure = {
		Type: 32,
		Size: 32
	};
}