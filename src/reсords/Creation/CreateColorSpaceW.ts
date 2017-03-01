export class CreateColorSpaceW {
	constructor() {
		console.log("CreateColorSpaceW");
	}

	private structure = {
		Type: 32,
		Size: 32,
		ihCS: 32,
		lcs: "variable",
		dwFlags: 32,
		cbData: 32,
		Data: "variable"
	};
}