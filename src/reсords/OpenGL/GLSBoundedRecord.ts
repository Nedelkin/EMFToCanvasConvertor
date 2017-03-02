export class GLSBoundedRecord {
	constructor() {
		console.log("GLSBoundedRecord");
	}

	private structure = {
		Type: 32,
		Size: 32,
		Bounds: 128,
		cbData: 32,
		Data: "variable"
	};
}