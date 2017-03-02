export class PolyPolyline16 {
	constructor() {
		console.log("PolyPolyline16");
	}

	private structure = {
		Type: 32,
		Size: 32,
		Bounds: 128,
		NumberOfPolygons: 32,
		Count: 32,
		PolylinePointCount: "variable",
		aPoints: "variable"
	}
}