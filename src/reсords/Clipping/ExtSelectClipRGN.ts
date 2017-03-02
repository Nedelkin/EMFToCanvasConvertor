export class ExtSelectClipRGN {
	constructor() {
		console.log("ExtSelectClipRGN");
	}

	private structure = {
		Type: 32,
		Size: 32,
		RgnDataSize: 32,
		RegionMode: 32,
		RgnData: "variable"
	};
}