import {Record} from "../Record";
export class SetBKMode extends Record {

	constructor() {
		super();
		console.log("SetBKMode");
	}

	protected structure = {
		Type: 32,
		Size: 32,
		BackgroundMode: 32
	};
}