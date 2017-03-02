import {Record} from "../Record";
export class SelectObject extends Record {
	constructor() {
		super();
		console.log("SelectObject");
	}

	protected structure = {
		Type: 32,
		Size: 32,
		ihObject: 32
	};
}