export class PolyPolygon {
	constructor() {
		console.log("PolyPolygon");
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