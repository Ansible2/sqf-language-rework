Returns the class name of a `Control` as it is defined in config. If you need config class of a game created `Display`, it is stored on display itself:
<sqf>_className = findDisplay 12 getVariable ["BIS_fnc_initDisplay_configClass", ""]; // "RscDiary"</sqf>


---
*Example 1:*
List class names of all controls present on display 46:

```sqf
_return = [];
{
	_return pushBack format ["IDC: %1, className: %2", ctrlIDC _x, ctrlClassName _x];
} forEach (allControls findDisplay 46);

copyToClipboard (_return joinString endl);
```