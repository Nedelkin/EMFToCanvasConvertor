import {RecordType} from "./enums/record-type";

export class RecordFactory {
	private constructor() {

	}

	public createRecord(type:RecordType) {
		console.log(RecordType[type]);
	}

	public static getInstance() {
		if (!this.instance) {
			this.instance = new RecordFactory();
		}

		return this.instance;
	}

	private static instance:RecordFactory;
}