export class PolyPolygon16 {
	constructor() {
		console.log("PolyPolygon16");
	}

	private structure = {
		Type: 32,
		Size: 32,
		Bounds: 128,
		NumberOfPolygons: 32,
		Count: 32,
		PolygonPointCount: "variable",
		aPoints: "variable"
	}
}