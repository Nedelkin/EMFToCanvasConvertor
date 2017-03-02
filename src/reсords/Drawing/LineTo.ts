import {Record} from "../Record";
export class LineTo extends Record {
	constructor() {
		super();
		console.log("LineTo");
	}

	protected structure = {
		Type: 32,
		Size: 32,
		Point: 64
	};
}