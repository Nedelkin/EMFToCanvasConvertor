export class SetICMProfileW {
	constructor() {
		console.log("SetICMProfileW");
	}

	private structure = {
		Type: 32,
		Size: 32,
		dwFlags: 32,
		cbName: 32,
		cbData: 32,
		Data: "variable"
	};
}