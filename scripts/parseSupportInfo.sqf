private _allCommandNames = [];
supportInfo "" apply {
	_x splitString ":" params ["_t", "_x"];
	if (_t != "t") then {
		_x = _x splitString " ";
		_command = switch count _x do {
			case 1;
			case 2: { _x # 0 };
			case 3: { _x # 1 };
			default {nil};
		};
		_allCommandNames pushBackUnique _command;
	};
};
_allCommandNames sort true;


private _commandInfoArray = [];
_allCommandNames apply {
	private _command = _x;
	private _supportInfoLookup = "i:" + _command;
	private _syntaxes = supportInfo _supportInfoLookup;
	_syntaxes apply {
		_commandInfoArray pushBackUnique _x;
	};
};

_commandInfoArray




private _getSyntaxType = {
	params ["_inGameType"];

	if (_inGameType isEqualTo "b") exitWith {"SQFSyntaxType.BinaryOperator"};
	if (_inGameType isEqualTo "u") exitWith {"SQFSyntaxType.UnaryOperator"};
	if (_inGameType isEqualTo "n") exitWith {"SQFSyntaxType.NularOperator"};
	
	""
};
private _parseType = {
	params ["_inGameType"];

	_inGameType = toUpperANSI _inGameType;
	if (_inGameType isEqualTo "SCALAR") exitWith {"SQFDataType.Number"};
	if (_inGameType isEqualTo "BOOL") exitWith {"SQFDataType.Bool"};
	if (_inGameType isEqualTo "ARRAY") exitWith {"SQFDataType.Array"};
	if (_inGameType isEqualTo "STRING") exitWith {"SQFDataType.String"};
	if (_inGameType isEqualTo "NOTHING") exitWith {"SQFDataType.Nothing"};
	if (_inGameType isEqualTo "ANY") exitWith {"SQFDataType.ANY"};
	if (_inGameType isEqualTo "NAMESPACE") exitWith {"SQFDataType.Namespace"};
	if (_inGameType isEqualTo "NAN") exitWith {"SQFDataType.NaN"};
	if (_inGameType isEqualTo "IF") exitWith {"SQFDataType.IfType"};
	if (_inGameType isEqualTo "WHILE") exitWith {"SQFDataType.WhileType"};
	if (_inGameType isEqualTo "FOR") exitWith {"SQFDataType.ForType"};
	if (_inGameType isEqualTo "SWITCH") exitWith {"SQFDataType.SwitchType"};
	if (_inGameType isEqualTo "EXCEPTION") exitWith {"SQFDataType.Exception"};
	if (_inGameType isEqualTo "WITH") exitWith {"SQFDataType.WithType"};
	if (_inGameType isEqualTo "CODE") exitWith {"SQFDataType.Code"};
	if (_inGameType isEqualTo "OBJECT") exitWith {"SQFDataType.Object"};
	if (_inGameType isEqualTo "VECTOR") exitWith {"SQFDataType.Vector"};
	if (_inGameType isEqualTo "SIDE") exitWith {"SQFDataType.Side"};
	if (_inGameType isEqualTo "GROUP") exitWith {"SQFDataType.Group"};
	if (_inGameType isEqualTo "TEXT") exitWith {"SQFDataType.StructuredText"};
	if (_inGameType isEqualTo "SCRIPT") exitWith {"SQFDataType.ScriptHandle"};
	if (_inGameType isEqualTo "CONFIG") exitWith {"SQFDataType.Config"};
	if (_inGameType isEqualTo "DISPLAY") exitWith {"SQFDataType.Display"};
	if (_inGameType isEqualTo "CONTROL") exitWith {"SQFDataType.Control"};
	if (_inGameType isEqualTo "NETOBJECT") exitWith {"SQFDataType.NetObject"};
	if (_inGameType isEqualTo "TEAM_MEMBER") exitWith {"SQFDataType.TeamMember"};
	if (_inGameType isEqualTo "HASHMAP") exitWith {"SQFDataType.HashMap"};
	if (_inGameType isEqualTo "TASK") exitWith {"SQFDataType.Task"};
	if (_inGameType isEqualTo "DIARY_RECORD") exitWith {"SQFDataType.DiaryRecord"};
	if (_inGameType isEqualTo "LOCATION") exitWith {"SQFDataType.Location"};

	"";
};

private _parseExample = {
	params ["_inGameExample"];
	private _newExample = ["```sqf",_inGameExample,"```"] joinString "\n";
	_newExample
};

private _getSyntaxId = {
	_x params [
		"_camelCaseName",
		"_syntaxType",
		"_resultType",
		["_argType","",[""]]
	];
		
	private _syntaxIdArray = [
		_camelCaseName,
		toLowerANSI _syntaxType, 
		toLowerANSI _resultType,
		toLowerANSI _argType
	];

	private _syntaxId = _syntaxIdArray joinString ":";
	_syntaxId
};

// _commandInfoArray apply {
private _syntaxMap = createHashMap;

private _formattedArray = (supportInfo "i:apply") apply {
	_x params [
		["_syntaxType","",[""]],
		["_lowerCaseName","",[""]],
		["_camelCaseName","",[""]],
		["_description","",[""]],
		["_example","",[""]],
		["_result","",[""]],
		["_resultType","",[""]],
		["_leftArgType","",[""]],
		["_rightArgType","",[""]]
	];

	private _commandSyntaxMap = _syntaxMap getOrDefault [_lowerCaseName,-1];
	if (_commandSyntaxMap isEqualTo -1) then {
		_commandSyntaxMap = createHashMap;
		_syntaxMap set [_lowerCaseName,_commandSyntaxMap];
	};

	private _syntaxId = [
		_camelCaseName,
		_syntaxType,
		_resultType

	] call _getSyntaxId;

	private _commandSyntaxArray = _commandSyntaxMap getOrDefault [_syntaxId,[],true];
	_commandSyntaxArray pushBackUnique [
		_syntaxType,
		_resultType,
		_leftArgType,
		_rightArgType,
		_example
	];

	// private _output =
	// 	"
	// 	%1: {
	// 		syntaxes: {
	// 			type: %2,
	// 			returnTypes: %3,
	// 			leftOperandTypes: %4,
	// 			rightOperandTypes: %5,
	// 		},
	// 		grammarType: SQFGrammarType.Command,
	// 	},
	// 	";
	
	// private _formatted = format [_output,_camelCaseName,_syntaxType,_resultType,_leftArgType,_rightArgType];
	// _formatted
};

_syntaxMap apply {
	private _commandName = _y;
	private _commandSyntaxes = toArray _x;

	// TODO: determine how to parse these into syntax blocks and/or an array of syntax blocks
	// parse into individual syntax object
	_commandSyntaxes apply {
		_syntaxType = [_syntaxType] call _getSyntaxType;
		_example = [_example] call _parseExample;
		_resultType = [_resultType] call _parseType;
		_leftArgType = [_leftArgType] call _parseType;
		_rightArgType = [_rightArgType] call _parseType;

	};

	_commandName
};

// copyToClipboard str _formattedArray;