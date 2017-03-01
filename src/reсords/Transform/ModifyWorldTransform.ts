export class ModifyWorldTransform {
	constructor() {
		console.log("ModifyWorldTransform");
	}

	private structure = {
		Type: 32,
		Size: 32,
		Xform: 192,
		ModifyWorldTransformMode: 32,
	};
}