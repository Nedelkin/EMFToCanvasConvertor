import {RecordType} from "./enums/record-type";
import {RecordFactory} from "./RecordFactory";

export class Parser {
	constructor(private data:DataView) {
	}

	parseRecords() {
		while (true) {
			let type = this.data.getUint32(this.offset, true);
			let size = this.data.getUint32(this.offset + this.size_record_offset, true);

			this.records[this.offset] = this.factory.createRecord(type);
			this.records[this.offset].parse(this.data, this.offset);

			if (RecordType.EMR_EOF === type) {
				break;
			}

			this.offset += size;
		}

		for(let offset in this.records) {
			if (this.records.hasOwnProperty(offset)) {
				this.records[offset].parse(this.data, offset);
			}
		}
	}
	private factory = RecordFactory.getInstance();

	private records:any = {};

	private offset = 0;
	private size_record_offset = 4;

}
