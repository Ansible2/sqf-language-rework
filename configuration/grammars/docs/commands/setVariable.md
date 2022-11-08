Set variable to given value in the variable space of given element. Can be used to broadcast variables over the network. To remove a variable, set it to `nil` (see <See HashLink Reference Example 5>).


---
*Syntaxes:*

varspace `setVariable` [name, value, public]

---
*Example 1:*

```sqf
_myTruck setVariable ["TAG_myPublicVariable", 123, true];
```

*Example 2:*

```sqf
_myTruck setVariable ["TAG_myLocalVariable", ["321", _var], owner driver _myTruck];
```

*Example 3:*

```sqf
missionNamespace setVariable ["TAG_myName", "Brian"];
hint TAG_myName; // hints "Brian"
```

*Example 4:*

Get the current value of a variable or, if it is undefined, define it and then get the value:

```sqf
private _var = missionNamespace getVariable "VarName";
if (isNil "_var") then {
	_var = 123;
	missionNamespace setVariable ["VarName", _var];
};
// _var now contains the current value of the missionNamespace's variable varName
```

*Example 5:*

Remove **TAG_myPublicVariable}} from {{hl|_myTruck** (globally):

```sqf
_myTruck setVariable ["TAG_myPublicVariable", nil, true];
```