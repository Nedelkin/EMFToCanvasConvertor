export class TransparentBLT {
	constructor() {
		console.log("TransparentBLT");
	}

	private strucuture = {
		Type: 32,
		Size: 32,
		Bounds: 128,
		xDest: 32,
		yDest: 32,
		cxDest: 32,
		cyDest: 32,
		TransparentColor: 32,
		xSrc: 32,
		ySrc: 32,
		XformSrc: 192,
		BkColorSrc: 32,
		UsageSrc: 32,
		offBmiSrc: 32,
		cbBmiSrc: 32,
		offBitsSrc: 32,
		cbBitsSrc: 32,
		cxSrc: 32,
		cySrc: 32,
		BitmapBuffer: "variable"
	}
}