export class SetLinkedUfis {
	constructor() {
		console.log("SetLinkedUfis");
	}

	private structure = {
		Type: 32,
		Size: 32,
		uNumLinkedUFI: 32,
		ufis: "variable",
		Reserved: 64
	};
}