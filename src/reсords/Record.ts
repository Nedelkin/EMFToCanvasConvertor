export interface IRecord  {
	parse(data:DataView, offset:number):void;
}

export class Record implements IRecord {
	public parse(data:DataView, offset:number):void {
		this.props = this.passBinaryTree(data, this.structure, offset);
		console.log(this.props)
	}

	private passBinaryTree(data:DataView, structure:any, offset:number):any {
		let result:any = {};

		for (let prop in structure) {

			if (structure.hasOwnProperty(prop)) {

				let value = structure[prop];

				if (typeof value === "number") {

					switch (value) {
						case 32: result[prop] = data.getUint32(offset, true); break;
						case 16: result[prop] = data.getUint16(offset, true); break;
						default: console.log(`The case for ${value} doesn't exist`);
					}

					offset += value / 8;
				}

				if (typeof value === "object") {
					result[prop] = this.passBinaryTree(data, value.structure, offset);
					offset += value.size / 8;
				}
			}
		}
		return result;
	}

	protected props:any = {};
	protected structure:any;
}