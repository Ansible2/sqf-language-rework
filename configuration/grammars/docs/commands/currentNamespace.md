Returns current `global namespace` the script runs in. Could be one of the following:
* `missionNamespace`
* `uiNamespace`
* `parsingNamespace`
* `profileNamespace`
* `localNamespace` (since Arma 3 v2.00)


---
*Example 1:*
```sqf
if (currentNamespace isEqualTo uiNamespace) then {hint "This is uiNamespace"};
```

*Example 2:*
Quick function to get namespace name
```sqf
_fn_currentNamespace = {
	if (currentNamespace isEqualTo missionNamespace) exitWith {"missionNamespace"};
	if (currentNamespace isEqualTo parsingNamespace) exitWith {"parsingNamespace"};
	if (currentNamespace isEqualTo profileNamespace) exitWith {"profileNamespace"};
	if (currentNamespace isEqualTo uiNamespace) exitWith {"uiNamespace"};
};

with profileNamespace do {
	systemChat call _fn_currentNamespace;	// profileNamespace
};
systemChat call _fn_currentNamespace;		// missionNamespace
with uiNamespace do {
	systemChat call _fn_currentNamespace;	// uiNamespace
};
```