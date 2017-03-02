export class SetWindowExtEx {
	constructor() {
		console.log("SetWindowExtEx");
	}

	private structure = {
		Type: 32,
		Size: 32,
		Extent: 32
	};
}