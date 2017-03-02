import {Record} from "../Record";
export class EmfMetafileHeader extends Record {
	constructor() {
		super();
		console.log("EmfMetafileHeader");
	}

	protected structure = {
		Type: 32,
		Size: 32,
		EmfHeader: 640,
		EmfDescriptionBuffer: "variable"
	};
}