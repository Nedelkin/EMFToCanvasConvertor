export class Comment_EMFPlus {
	constructor() {
		console.log("Comment_EMFPlus");
	}

	private structure = {
		Type: 32,
		Size: 32,
		DataSize: 32,
		CommentIdentifier: 32,
		EMFPlusRecords: "variable"
	};
}