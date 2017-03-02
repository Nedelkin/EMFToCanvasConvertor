import {Record} from "../Record";
export class SetRop2 extends Record {
	constructor() {
		super();
		console.log("SetRop2");
	}
	protected structure = {
		Type: 32,
		Size: 32,
		ROP2Mode: 32,
	};
}