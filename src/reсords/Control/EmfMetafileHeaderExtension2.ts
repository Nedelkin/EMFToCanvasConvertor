export class EmfMetafileHeaderExtension2 {
	constructor() {
		console.log("EmfMetafileHeaderExtension2")
	}

	private structure = {
		Type: 32,
		Size: 32,
		EmfHeader: 640,
		EmfHeaderExtension1: 96,
		EmfHeaderExtension2: 64,
		EmfDescriptionBuffer: "variable",
		EmfPixelFormatBuffer: "variable"
	}
}