export class ModifyWorldTranform {
	constructor(){
		console.log('ModifyWorldTranform');
	}

	private structure = {
		Type: 32,
		Size: 32,
		Xform: 192,
		ModifyWorldTransformMode: 32
	};
}