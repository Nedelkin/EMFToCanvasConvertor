import {Record} from "../Record";
export class ModifyWorldTransform extends Record {
	constructor() {
		super()
		console.log("ModifyWorldTransform");
	}

	protected structure = {
		Type: 32,
		Size: 32,
		Xform: 192,
		ModifyWorldTransformMode: 32,
	};
}