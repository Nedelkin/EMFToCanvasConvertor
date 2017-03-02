export interface IRecord  {
	parse(data:DataView, offset:number):void;
}

export class Record implements IRecord {
	public parse(data:DataView, offset:number):void {
		for (let prop in this.structure) {
			if (this.structure.hasOwnProperty(prop)) {
				if (this.structure[prop] === 32) {
					this.props[prop] = data.getUint32(offset, true);
					offset += this.structure[prop] / 8;
				}
			}
		}
		console.log(this.props);
	}

	protected props:any = {};
	protected structure:any;
}