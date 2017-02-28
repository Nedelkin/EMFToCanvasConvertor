import {RecordType} from "./enums/record-type";
let canvas = document.getElementById("canvas");
let file = document.getElementById("file");

export class Parser {
	constructor(private data:DataView) {
	}

	parseRecords() {
		while (true) {
			let type = this.data.getUint32(this.offset, true);
			let size = this.data.getUint32(this.offset + this.size_record_offset, true);
			console.log(RecordType[type])

			this.offset += size;
			if (RecordType.EMR_EOF === type) {
				break;
			}
		}
	}

	private offset = 0;
	private size_record_offset = 4;

}

file.onchange = function (e:any) {
	let file = e.target.files[0];
	let reader = new FileReader();
	reader.readAsArrayBuffer(file);

	reader.onload = function (e:any) {
		let buffer = e.target.result;
		let data = new DataView(buffer);
		new Parser(data).parseRecords();
	}
};

