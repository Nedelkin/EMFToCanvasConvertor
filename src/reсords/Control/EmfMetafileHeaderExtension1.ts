export class EmfMetafileHeaderExtension1 {
	constructor() {
		console.log("EmfMetafileHeaderExtension1")
	}

	private structure = {
		Type: 32,
		Size: 32,
		EmfHeader: 640,
		EmfHeaderExtension1: 96,
		EmfDescriptionBuffer: "variable",
		EmfPixelFormatBuffer: "variable"
	};
}