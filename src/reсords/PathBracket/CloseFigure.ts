import {Record} from "../Record";
export class CloseFigure extends Record {
	constructor() {
		super();
		console.log("CloseFigure");
	}

	protected structure = {
		Type: 32,
		Size: 32
	};
}