Checks specific difficulty settings of the current user. Difficulty flag names can be found in the **CfgDifficultyPresets** config class or in 
`ArmA profile` file under class **DifficultyPresets/xxx/Options** (xxx being Recruit, Regular or Veteran). This command replaces `difficultyEnabled` as many options have multiple values and former command only provided `Boolean` return.


---
*Syntaxes:*

`difficultyOption` optionName

---
*Example 1:*

```sqf
hint str (difficultyOption "friendlyTags");
```

*Example 2:*

Remember last `cameraView` per vehicle:

```sqf
player addEventHandler ["GetOutMan", {
	params ["_unit", "", "_vehicle"];
	_unit setVariable [_vehicle call BIS_fnc_netId, cameraView];
}];
player addEventHandler ["GetInMan", {
	if (difficultyOption "thirdPersonView" == 2) then {
		params ["_unit", "", "_vehicle"];
		_unit switchCamera (_unit getVariable [_vehicle call BIS_fnc_netId, "INTERNAL"]);
	};
}];
```