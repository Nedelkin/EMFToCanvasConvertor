export class EmfMetafileHeader {
	constructor() {
		console.log("EmfMetafileHeader");
	}

	private structure = {
		Type: 32,
		Size: 32,
		EmfHeader: 640,
		EmfDescriptionBuffer: "variable"
	};
}