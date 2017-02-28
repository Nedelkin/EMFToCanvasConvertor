export class Comment_Public {
	constructor() {
		console.log("Comment_Public")
	}

	private structure = {
		Type: 32,
		Size: 32,
		DataSize: 32,
		CommentIdentifier: 32,
		PublicCommentIdentifier: 32,
		PublicCommentRecordBuffer: "variable"
	};
}