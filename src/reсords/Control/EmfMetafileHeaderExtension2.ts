import {Record} from "../Record";
import {Header} from "../../objects/Header";
import {HeaderExtension1} from "../../objects/HeaderExtension1";
import {HeaderExtension2} from "../../objects/HeaderExtension2";
export class EmfMetafileHeaderExtension2 extends Record {
	constructor() {
		super();
		console.log("EmfMetafileHeaderExtension2")
	}

	protected structure:any = {
		Type: 32,
		Size: 32,
		EmfHeader: {
			size: 640,
			structure: Header
		},
		EmfHeaderExtension1: {
			size: 96,
			structure: HeaderExtension1
		},
		EmfHeaderExtension2: {
			size: 64,
			structure: HeaderExtension2
		},
		EmfDescriptionBuffer: "variable",
		EmfPixelFormatBuffer: "variable"
	}
}