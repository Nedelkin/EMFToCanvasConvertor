export class SetICMProfileA {
	constructor() {
		console.log("SetICMProfileA");
	}

	private structure = {
		Type: 32,
		Size: 32,
		dwFlags: 32,
		cbName: 32,
		cbData: 32,
		Data: "variable"
	}
}