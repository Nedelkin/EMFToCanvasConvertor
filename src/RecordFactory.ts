import {RecordType} from "./enums/record-type";
import {Header} from "./reсords/Header";
import {SetMapMode} from "./reсords/State/SetMapMode";
import {ModifyWorldTranform} from "./reсords/ModifyWorldTranform";
import {Comment} from "./reсords/Comment/Comment";
import {SetPolyfillMode} from "./reсords/State/SetPolyfillMode";

let records = {
	[RecordType.EMR_HEADER]: Header,
	[RecordType.EMR_SETMAPMODE]: SetMapMode,
	[RecordType.EMR_MODIFYWORLDTRANSFORM]: ModifyWorldTranform,
	[RecordType.EMR_COMMENT]: Comment,
	[RecordType.EMR_SETBKMODE]: SetMapMode,
	[RecordType.EMR_SETPOLYFILLMODE]: SetPolyfillMode,
};

export class RecordFactory {
	private constructor() {

	}

	public createRecord(type:RecordType) {
		if (!records[type]) {
			throw new Error(`type ${RecordType[type]} doesnt exist`);
		}
		return new records[type];
	}

	public static getInstance() {
		if (!this.instance) {
			this.instance = new RecordFactory();
		}

		return this.instance;
	}

	private static instance:RecordFactory;
}