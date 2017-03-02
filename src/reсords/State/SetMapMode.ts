import {Record} from "../Record";
export class SetMapMode extends Record {
	constructor() {
		super()
		console.log('SetMapMode');
	}

	protected structure = {
		Type: 32,
		Size: 32,
		MapMode: 32
	};
}