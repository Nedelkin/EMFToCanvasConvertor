import {Parser} from "./Parser";


let canvas = document.getElementById("canvas");
let file = document.getElementById("file");

file.onchange = function (e:any) {
	let file = e.target.files[0];
	let reader = new FileReader();
	reader.readAsArrayBuffer(file);

	reader.onload = function (e:any) {
		let buffer = e.target.result;
		let data = new DataView(buffer);
		let parser = new Parser(data);
		parser.parseRecords();
	}
};

