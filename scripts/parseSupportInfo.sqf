private _commands = [];
(supportInfo "" - supportInfo "t:*") apply {
	private _commandSyntaxArray = (_x select [2]) splitString " ";
	private _commandName = _commandSyntaxArray select 1;
	_commands pushBackUnique _commandName;
};

private _commandInfoArray = [];
_commands apply {
	private _command = _x;
	private _supportInfoLookup = "i:" + _command;
	private _syntaxes = supportInfo _supportInfoLookup;
	_syntaxes apply {
		_commandInfoArray pushBackUnique _x;
	};
};

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

// _commandInfoArray apply {
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

	_syntaxType = [_syntaxType] call _getSyntaxType;
	_example = [_example] call _parseExample;
	_resultType = [_resultType] call _parseType;
	_leftArgType = [_leftArgType] call _parseType;
	_rightArgType = [_rightArgType] call _parseType;
	
	private _output = "
		%1: {
			syntaxes: {
				type: %2,
				returnTypes: %3,
				leftOperandTypes: %4,
				rightOperandTypes: %5,
			},
			grammarType: SQFGrammarType.Command,
		},
	";
	
	private _formatted = format [_output,_camelCaseName,_syntaxType,_resultType,_leftArgType,_rightArgType];
	_formatted
};

copyToClipboard str _formattedArray;


/*
	Author: 
		Killzone_Kid
		
	Description:
		A utility for listing all available script commands
		
	UPDATE:
		Added ability to filter searches (- character). For example:		mod -mode		will include 'configsourceMOD' but not 'allow3dMODe'
		Added ability to do exact searches (" character). For example:		"select"			will return 'select' only
		Added ability to use wildcard (* character). For example:			ctrl*			will return 'ctrlXXX' commands
																	*backpack		will return 'XXXbackpack' commands
*/

#include "lib\header.sqf"

private _wikiPageConvert = createHashMapFromArray 
[
	["||", "a_or_b"], 
	["!", "!_a"],
	["!=", "a_!=_b"],
	["#", "a_hash_b"], 
	["%", "a_%25_b"],
	["&&", "a_&&_b"],
	["*", "a_*_b"],
	["+", "a_+_b"],
	["+", "a_-_b"],
	["/", "a_/_b"],
	[":", "a_:_b"],
	["<", "a_less_b"],
	[">", "a_greater_b"],
	["<=", "a_less=_b"],
	[">=", "a_greater=_b"],
	["==", "a_==_b"],
	[">>", "config_greater_greater_name"],
	["^", "a_^_b"]
];

// preload
private _scriptCommands = missionNamespace getVariable ["BIS_utils_scriptCommands", [[], locationNull]];
_scriptCommands params ["_allCommands", "_commandsHash"];

if (isNull _commandsHash || count _allCommands == 0) then 
{ 
	_commandsHash = createLocation ["Invisible", [0,0,0], 0, 0];
	
	{
		private _args = (_x select [2]) splitString " ";
		
		private _commandName = switch (count _args) do
		{
			case 3 : { _args select 1 };
			case 2 : { _args select 0 };
			case 1 : 
			{ 
				private _command = _args select 0;
				if (_command isEqualTo toUpperANSI _command) exitWith { "" };
				_command
			};
			default { "" };
		};
		
		if (_commandName != "" && isNil { _commandsHash getVariable _commandName }) then
		{
			private _supportInfo = supportInfo format ["i:%1", _commandName];
			_commandsHash setVariable [_commandName, [_supportInfo select 0 select 2, _supportInfo]];
		};
	}
	forEach (supportInfo "" - supportInfo "t:*");
	
	_allCommands = allVariables _commandsHash - ["||"];
	_allCommands sort true;
	
	_scriptCommands = [["||"] + _allCommands, _commandsHash];
	missionNamespace setVariable ["BIS_utils_scriptCommands", _scriptCommands];
};

[_functionDisplay, "RscText", ["Enter Keyword","EtelkaMonospacePro",0.03], [-0.01,0.01,0.25,0.04], [0,0,0,0], [0.3,0.3,0.3,1], "Enter keyword to find a matching command", false] call _fnc_addControl;

private _input = [_functionDisplay, "RscEdit", ["","EtelkaMonospacePro",0.03], [0,0.06,1,0.04], [0.05,0.05,0.05,1], [0.9,0.9,0.9,1], "", true] call _fnc_addControl;
_functionDisplay setVariable ["_input", _input];

_input ctrlAddEventHandler ["KeyDown", 
{
	params ["_ctrl", "_dik"];
	if (_dik isEqualTo 28) then
	{
		_ctrl ctrlRemoveAllEventHandlers "KeyDown";
		_disp = ctrlParent _ctrl;
		_inputText = ctrlText (_disp getVariable "_input");
		_inputText execVM __FILE__;
		playSound ["SoundClick", true];
	};
}];

private _generate = [_functionDisplay, "RscButtonMenu", ["Search","",0], [0.8,0.11,0.2,0.04], [0.15,0.15,0.15,1], [1,1,1,1], "", true] call _fnc_addControl;

_generate ctrlAddEventHandler ["ButtonClick", 
{
	params ["_ctrl"];
	_ctrl ctrlRemoveAllEventHandlers "ButtonClick";
	_disp = ctrlParent _ctrl;
	_inputText = ctrlText (_disp getVariable "_input");
	_inputText execVM __FILE__;
}];

private _commandList = [_functionDisplay, "RscTree", ["","EtelkaMonospacePro",0.03], [0,0.2,1,0.75], [0.05,0.05,0.05,1], [0.9,0.9,0.9,1], "", true] call _fnc_addControl;
_functionDisplay setVariable ["_commandList", _commandList];

_commandList ctrlSetTooltipMaxWidth 0.5;
_commandList ctrlAddEventHandler ["TreeSelChanged", 
{
	params ["_ctrl", "_selectionPath"];
	_disp = ctrlParent _ctrl;
	
	if (count _selectionPath > 1) then 
	{
		_selectionPath resize 1;
		_ctrl tvSetCurSel _selectionPath;
	};
	
	if (count tvCurSel _ctrl != 0) then 
	{ 
		(_disp getVariable "_help") ctrlEnable true; 
		(_disp getVariable "_help") ctrlSetUrl format ["https://community.bistudio.com/wiki/%1", _ctrl tvData _selectionPath];
		(_disp getVariable "_copy") ctrlEnable isServer;
	};
	
	ctrlSetFocus (_disp getVariable "_input");
}];

if (isNil "_this" || {  !(_this isEqualType "") }) then { _this = "" };
_scriptCommands params ["_allCommands", "_commandsHash"];

private _countUnique = 0;
private _countTotal = 0;

private _kw = toLowerANSI _this;
private _exact = _kw find """" > -1;
private _wildcardIndex = _kw find "*";
private _wildcard = _kw != "*" && _wildcardIndex > -1  && !_exact;
private _ignore = _kw != "-" && _kw find "-" > -1 && !_exact && !_wildcard;
private _query = [];
private _kws = [];

if (_exact) then { _kw = _kw splitString """ " param [0, ""] };
if (_wildcard) then { _kws = _kw splitString "* " };
if (_ignore) then
{
	_query = _kw splitString "- ";
	_kw = _query param [0, ""];
	_query deleteAt 0;
};
private _ctrlWidth = ctrlPosition _commandList select 3;
{
	private _command = _x;
	private _index = _command find _kw;
	if (_exact) then { _index = parseNumber (_command == _kw) - 1 };
	if (_wildcard) then { if (_kws findIf { _command find _x < 0 } > -1) then { _index = -1 } else { _index = 0 } };
	if (_ignore && { _query findIf { _command find _x > -1 } > -1 }) then { _index = -1 };
	if (_this == "" || _index > -1 ) then 
	{
		_commandsHash getVariable _command params ["_commandCamelCase", "_supportInfo"];
		private _NSyntaxes = count _supportInfo;
		private _itemPath = _commandList tvAdd [[], format ["%1%2", _commandCamelCase, ["", format [" (%1)", _NSyntaxes]] select (_NSyntaxes > 1)]];
		_commandList tvSetData [[_itemPath], _wikiPageConvert getOrDefault [_commandCamelCase, _commandCamelCase]];

		_commandList tvSetColor [[_itemPath], [1,1,1,1]];
		{
			_x params ["_commandType", "_lowerCaseName", "_camelCaseName", "_description", "_example", "_exampleresult", "_returnType", "_leftArgType", "_rightArgType"];
			
			private _formatDescription = format ["%1%2", ["", format ["%1. ", _forEachIndex + 1]] select (_NSyntaxes > 1), _description];
			private _textWidth = _formatDescription getTextWidth ["EtelkaMonospacePro", 0.03];
			private _letterWidth = if (count _formatDescription > 0) then { _textWidth / count _formatDescription } else { 0 };
			if (_ctrlWidth < _textWidth) then { _formatDescription = (_formatDescription select [0, _ctrlWidth / _letterWidth + 9]) + "...>>" };
			private _itemPath1 = _commandList tvAdd [[_itemPath], _formatDescription];
			_commandList tvSetColor [[_itemPath, _itemPath1], [0.75,0.75,0.75,1]];
			if (_ctrlWidth < _textWidth) then { _commandList tvSetTooltip [[_itemPath, _itemPath1], _description]};
			
			private _syntax = switch (_commandType) do 
			{
				case "b": { format [" Syntax: <%1> %2 <%3>", _leftArgType, _camelCaseName, _rightArgType] };
				case "u": { format [" Syntax: %1 <%2>", _camelCaseName, _rightArgType] };
				case "n": { format [" Syntax: %1", _camelCaseName] };
				default { "" };
			};
			
			private _itemPath2 = _commandList tvAdd [[_itemPath], _syntax];
			_commandList tvSetColor [[_itemPath, _itemPath2], [0.45,0.45,0.45,1]];
			
			private _itemPath3 = _commandList tvAdd [[_itemPath], format [" Return: <%1>", _returnType]];
			_commandList tvSetColor [[_itemPath, _itemPath3], [0.45,0.45,0.45,1]];
			
			if (_example != "") then
			{
				private _formatExample =  format [" Example: %1", _example];
				private _itemPath4 = _commandList tvAdd [[_itemPath], _formatExample];
				_commandList tvSetColor [[_itemPath, _itemPath4], [0.45,0.45,0.45,1]];
				private _textWidth = _formatExample getTextWidth ["EtelkaMonospacePro", 0.03];
				if (_ctrlWidth < _textWidth) then { _commandList tvSetTooltip [[_itemPath, _itemPath4], _example]};
			};
			
			_countTotal = _countTotal + 1;	
		} 
		forEach _supportInfo;
		_countUnique = _countUnique + 1;
	};
}
forEach _allCommands;

if (_commandList tvCount [] == 0) then 
{
	_commandList tvAdd [[], "¯\_(ツ)_/¯"];
	_commandList ctrlEnable false; 
};


private _total = [_functionDisplay, "RscText", ["","EtelkaMonospacePro",0.03], [-0.01,0.96,0.5,0.04], [0,0,0,0], [0.3,0.3,0.3,1], "", false] call _fnc_addControl;
_total ctrlSetText format ["Unique: %1  Total: %2", _countUnique, _countTotal];
_total ctrlEnable false;

private _help = [_functionDisplay, "RscButtonMenuBIKI", ["HELP","",0], [0.705,0.96,0.09,0.04], [0.15,0.15,0.15,1], [1,1,1,1], "Go to wiki command description page", true] call _fnc_addControl;
_functionDisplay setVariable ["_help", _help];

_help ctrlAddEventHandler ["ButtonClick", 
{
	params ["_ctrl"];
	_disp = ctrlParent _ctrl;
}];

private _copy = [_functionDisplay, "RscButtonMenu", ["COPY","",0], [0.8,0.96,0.2,0.04], [0.15,0.15,0.15,1], [1,1,1,1], "Copy the command name to clipboard", true] call _fnc_addControl;
_functionDisplay setVariable ["_copy", _copy];

_copy ctrlAddEventHandler ["ButtonClick", 
{
	params ["_ctrl"];
	_disp = ctrlParent _ctrl;
	_commandList = _disp getVariable "_commandList"; 
	copyToClipboard toLowerANSI (_commandList tvData tvCurSel _commandList);
	playSound ["Topic_Selection", true];
}];

if (count tvCurSel _commandList == 0) then 
{ 
	_help ctrlEnable false; 
	_copy ctrlEnable false;
};

// in mp copy works for server only
if (isMultiplayer && !isServer) then 
{
	_copy ctrlEnable false;
	_copy ctrlSetToolTip "In MP copyToClipboard is only available for the host";
};

ctrlSetFocus _input;




