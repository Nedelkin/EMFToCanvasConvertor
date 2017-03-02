import {Record} from "../Record";
export class SetPolyfillMode extends Record {

	constructor(){
		super();
		console.log("SetPolyfillMode");
	}

	protected structure = {
		Type: 32,
		Size: 32,
		PolygonFillMode: 32
	};
}