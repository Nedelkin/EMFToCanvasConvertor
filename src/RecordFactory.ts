import {RecordType} from "./enums/record-type";
import {SetMapMode} from "./reсords/State/SetMapMode";
import {Comment} from "./reсords/Comment/Comment";
import {SetPolyfillMode} from "./reсords/State/SetPolyfillMode";
import {ModifyWorldTransform} from "./reсords/Transform/ModifyWorldTransform";
import {SetTextAlign} from "./reсords/State/SetTextAlign";
import {SetTextColor} from "./reсords/State/SetTextColor";
import {SetRop2} from "./reсords/State/SetRop2";
import {CreateBrushInDirect} from "./reсords/Creation/CreateBrushInDirect";
import {SelectObject} from "./reсords/ObjectManipulation/SelectObject";
import {BeginPath} from "./reсords/PathBracket/BeginPath";
import {MoveToEx} from "./reсords/State/MoveToEx";
import {PolyBezierTo} from "./reсords/Drawing/PolyBezierTo";
import {CloseFigure} from "./reсords/PathBracket/CloseFigure";
import {EndPath} from "./reсords/PathBracket/EndPath";
import {FillPath} from "./reсords/Drawing/FillPath";
import {DeleteObject} from "./reсords/ObjectManipulation/DeleteObject";
import {LineTo} from "./reсords/Drawing/LineTo";
import {EOF} from "./reсords/Control/EOF";
import {EmfMetafileHeaderExtension2} from "./reсords/Control/EmfMetafileHeaderExtension2";

let records = {
	[RecordType.EMR_HEADER]: EmfMetafileHeaderExtension2,
	[RecordType.EMR_SETMAPMODE]: SetMapMode,
	[RecordType.EMR_MODIFYWORLDTRANSFORM]: ModifyWorldTransform,
	[RecordType.EMR_COMMENT]: Comment,
	[RecordType.EMR_SETBKMODE]: SetMapMode,
	[RecordType.EMR_SETPOLYFILLMODE]: SetPolyfillMode,
	[RecordType.EMR_SETTEXTALIGN]: SetTextAlign,
	[RecordType.EMR_SETTEXTCOLOR]: SetTextColor,
	[RecordType.EMR_SETROP2]: SetRop2,
	[RecordType.EMR_CREATEBRUSHINDIRECT]: CreateBrushInDirect,
	[RecordType.EMR_SELECTOBJECT]: SelectObject,
	[RecordType.EMR_BEGINPATH]: BeginPath,
	[RecordType.EMR_MOVETOEX]: MoveToEx,
	[RecordType.EMR_POLYBEZIERTO]: PolyBezierTo,
	[RecordType.EMR_CLOSEFIGURE]: CloseFigure,
	[RecordType.EMR_ENDPATH]: EndPath,
	[RecordType.EMR_FILLPATH]: FillPath,
	[RecordType.EMR_DELETEOBJECT]: DeleteObject,
	[RecordType.EMR_LINETO]: LineTo,
	[RecordType.EMR_EOF]: EOF
};

export class RecordFactory {
	private constructor() {

	}

	public createRecord(type:RecordType) {
		if (!records[type]) {
			throw new Error(`type ${RecordType[type]} doesnt exist`);
		}
		return new records[type];
	}

	public static getInstance() {
		if (!this.instance) {
			this.instance = new RecordFactory();
		}

		return this.instance;
	}

	private static instance:RecordFactory;
}