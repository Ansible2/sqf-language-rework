Return information about military rank.

	1: STRING - requited data, can be one of following:
		"displayName" - full localized name (e.g. "Major")
		"displayNameShort" - short localized name (e.g. "Maj.")
		"classname" - system name (e.g. "MAJOR")
		"texture" - path to rank insignia


---
*Syntaxes:*

[source, infoType] call `BIS_fnc_rankParams`

---
*Example 1:*

```sqf
private _shortRank = [player, "displayNameShort"] call BIS_fnc_rankParams;
```