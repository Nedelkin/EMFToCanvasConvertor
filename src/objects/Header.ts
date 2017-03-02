import {RectL} from "../WMF/objects/RectL";
import {SizeL} from "../WMF/objects/SizeL";
export const Header = {
	Bounds: {
		size: 128,
		structure: RectL
	},
	Frame: {
		size: 128,
		structure: RectL
	},
	RecordSignature: 32,
	Version: 32,
	Bytes: 32,
	Records: 32,
	Handles: 16,
	Reserved: 16,
	nDescription: 32,
	offDescription: 32,
	nPalEntries: 32,
	Device: {
		size: 64,
		structure: SizeL
	},
	Millimeters: {
		size: 64,
		structure: SizeL
	},
};