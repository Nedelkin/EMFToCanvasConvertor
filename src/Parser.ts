import {RecordType} from "./enums/record-type";
import {RecordFactory} from "./RecordFactory";

export class Parser {
	constructor(private data:DataView) {
	}

	parseRecords() {
		while (true) {
			let type = this.data.getUint32(this.offset, true);
			let size = this.data.getUint32(this.offset + this.size_record_offset, true);

			RecordFactory.getInstance().createRecord(type);


			this.offset += size;
			if (RecordType.EMR_EOF === type) {
				break;
			}
		}
	}

	private offset = 0;
	private size_record_offset = 4;

}
