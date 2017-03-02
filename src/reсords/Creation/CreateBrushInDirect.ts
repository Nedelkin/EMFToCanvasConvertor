import {Record} from "../Record";
export class CreateBrushInDirect extends Record {
	constructor() {
		super();
		console.log("CreateBrushInDirect");
	}

	protected structure = {
		Type: 32,
		Size: 32,
		ihBrush: 32,
		LogBrush: 96
	};
}