export class PolyPolyline {
	constructor() {
		console.log("PolyPolyline");
	}

	private structure = {
		Type: 32,
		Size: 32,
		Bounds: 128,
		NumberOfPolygons: 32,
		Count: 32,
		aPolylinePointCount: "variable",
		aPoints: "variable"
	}
}