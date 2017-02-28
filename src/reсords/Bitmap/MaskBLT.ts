export class MaskBLT {
	constructor() {
		console.log("MaskBLT")
	}

	private structure = {
		Type: 32,
		Size: 32,
		Bounds: 128,
		xDest: 32,
		yDest: 32,
		cxDest: 32,
		cyDest: 32,
		ROP4: 32,
		xSrc: 32,
		ySrc: 32,
		XformSrc: 192,
		BkColorSrc: 32,
		UsageSrc: 32,
		offBmiSrc: 32,
		cbBmiSrc: 32,
		offBitsSrc: 32,
		cbBitsSrc: 32,
		xMask: 32,
		yMask: 32,
		UsageMask: 32,
		offBmiMask: 32,
		cbBmiMask: 32,
		offBitsMask: 32,
		cbBitsMask: 32,
		BitmapBuffer: "variable"
	}
}