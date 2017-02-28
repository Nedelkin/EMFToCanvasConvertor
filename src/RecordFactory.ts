import {RecordType} from "./enums/record-type";
import {Header} from "./reсords/Header";
import {SetMapMode} from "./reсords/SetMapMode";
import {ModifyWorldTranform} from "./reсords/ModifyWorldTranform";

let records = {
	[RecordType.EMR_HEADER]: Header,
	[RecordType.EMR_SETMAPMODE]: SetMapMode,
	[RecordType.EMR_MODIFYWORLDTRANSFORM]: ModifyWorldTranform
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