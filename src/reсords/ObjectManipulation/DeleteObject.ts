import {Record} from "../Record";
export class DeleteObject extends Record {
	constructor() {
		super();
		console.log("DeleteObject");
	}

	protected structure = {
		Type: 32,
		Size: 32,
		ihObject: 32,
	}
}