import {Record} from "../Record";
export class SetTextColor extends Record {
	constructor() {
		super();
		console.log("SetTextColor");
	}

	protected structure = {
		Type: 32,
		Size: 32,
		Color: 32
	};
}