export class SetWindowOrgEx {
	constructor() {
		console.log("SetWindowOrgEx");
	}

	private structure = {
		Type: 32,
		Size: 32,
		Origin: 32
	};
}