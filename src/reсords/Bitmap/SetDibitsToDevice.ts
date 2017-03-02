export class SetDibitsToDevice {
	constructor() {
		console.log("SetDibitsToDevice");
	}

	private structure = {
		Type: 32,
		Size: 32,
		Bounds: 128,
		xDest: 32,
		yDest: 32,
		xSrc: 32,
		ySrc: 32,
		cxSrc: 32,
		cySrc: 32,
		offBmiSrc: 32,
		cbBmiSrc: 32,
		offBitsSrc: 32,
		cbBitsSrc: 32,
		UsageSrc: 32,
		iStartScan: 32,
		cScans: 32,
		BitmapBuffer: "variable"
	};
}