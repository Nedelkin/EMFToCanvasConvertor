import {Record} from "../Record";
export class Comment extends Record {
	constructor() {
		super();
		console.log('Comment');
	}

	protected structure = {
		Type: 32,
		Size: 32,
		DataSize: 32,
		PrivateData: "variable"
	};
}