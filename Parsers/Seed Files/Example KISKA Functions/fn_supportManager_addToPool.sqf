#include "..\Headers\Support Manager Common Defines.hpp"
/* ----------------------------------------------------------------------------
Function: KISKA_fnc_supportManager_addToPool

Description:
	Adds an entry into the local support manager pool.

Parameters:
	0: _entryToAdd <STRING or ARRAY> - The support class or [support class,uses left]
	1: _bypassChecks <BOOL> - Decides whether or not to perform checks on _entryToAdd for errors

Returns:
	NOTHING

Examples:
    (begin example)
		["someClass"] call KISKA_fnc_supportManager_addToPool;
    (end)

Authors:
	Ansible2
---------------------------------------------------------------------------- */
scriptName "KISKA_fnc_supportManager_addToPool";

if !(hasInterface) exitWith {};

params [
	["_entryToAdd","",["",[]]],
	["_bypassChecks",false]
];

private _exit = false;
if !(_bypassChecks) then {
	if (_entryToAdd isEqualTo "" OR {_entryToAdd isEqualTo []}) exitWith {
		["_entryToAdd is empty!",true] call KISKA_fnc_log;
		_exit = true;
	};

	// verify class is defined
	private "_class";
	if (_entryToAdd isEqualType []) then {
		_class = _entryToAdd select 0;
	} else {
		_class = _entryToAdd;
	};

	private _config = [["CfgCommunicationMenu",_class]] call KISKA_fnc_findConfigAny;
	if (isNull _config) exitWith {
		[[_class," is not defined in any CfgCommunicationMenu!"],true] call KISKA_fnc_log;
		_exit = true;
	};
};

if (_exit) exitWith {};


private _supportArray = GET_SM_POOL;
_supportArray pushBack _entryToAdd;
if (isNil SM_POOL_VAR_STR) then {
	missionNamespace setVariable [SM_POOL_VAR_STR,_supportArray];
};

call KISKA_fnc_supportManager_updateCurrentList;
call KISKA_fnc_supportManager_updatePoolList;


nil
