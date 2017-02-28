export class Comment_EMFSpool {
	constructor() {
		console.log("Comment_EMFSpool")
	}

	private structure = {
		Type: 32,
		Size: 32,
		DataSize: 32,
		CommentIdentifier: 32,
		EMFSpoolRecordIdentifier: 32,
		EMFSpoolRecords: "variable"
	};
}