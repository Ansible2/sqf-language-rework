Sets position and size of the given map control and recalculates control center. The effect is immediate and no `ctrlCommit` is necessary, unlike with `ctrlSetPosition` command.


---
*Syntaxes:*

map `ctrlMapSetPosition` [x, y, w, h]

---
*Example 1:*

```sqf
_map ctrlMapSetPosition [0,0,1,1];
```

*Example 2:*

```sqf
_map ctrlSetPosition [0.5, 0.5, 0.5, 0.5];
_map ctrlCommit 0;
_map ctrlMapSetPosition []; // sync
```

*Example 3:*

```sqf
with localNamespace do
{
	private _display = findDisplay 46 createDisplay "RscDisplayEmpty";
	private _ctrlGroup = _display ctrlCreate ["RscControlsGroup", -1];
	private _ctrlText = _display ctrlCreate ["RscText", -1, _ctrlGroup];
	_ctrltext ctrlSetPosition [0, 0, 1, 1];
	_ctrlText ctrlSetBackgroundColor [1, 0, 0, 0.5];
	_ctrlText ctrlCommit 0;
	private _ctrlMap = _display ctrlCreate ["RscMapControl", -1, _ctrlGroup];
	_ctrlMap ctrlMapSetPosition [0, 0, 0.5, 0.5]; // effect is immediate
	_ctrlMap ctrlMapAnimAdd [0, ctrlMapScale _ctrlMap, player];
	ctrlMapAnimCommit _ctrlMap;
	_ctrlGroup ctrlSetPosition [safeZoneX, safeZoneY, 1, 1];
	_ctrlGroup ctrlCommit 0.3; // non instant transition
	_ctrlMap ctrlMapSetPosition []; // instant sync to new _ctrlGroup position
};
```