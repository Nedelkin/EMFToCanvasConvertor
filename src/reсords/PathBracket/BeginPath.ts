import {Record} from "../Record";
export class BeginPath extends Record {
	constructor() {
		super();
		console.log("BeginPath");
	}

	protected structure = {
		Type: 32,
		Size: 32
	};
}