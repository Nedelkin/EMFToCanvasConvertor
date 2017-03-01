export class Polyline {
	constructor() {
		console.log("Polyline");
	}

	private structure = {
		Type: 32,
		Size: 32,
		Bounds: 128,
		Count: 32,
		aPoints: "variable"
	};
}