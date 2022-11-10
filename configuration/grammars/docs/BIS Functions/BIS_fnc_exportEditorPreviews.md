Export screenshots of objects for `Eden Editor` and Community Wiki to **<Arma 3 Profile>\Screenshots\EditorPreviews** directory. See `:Category:Arma 3: Assets|Arma 3 assets`.


---
*Syntaxes:*

[duration, type, sides, mods, addons, classes] spawn `BIS_fnc_exportEditorPreviews`

---
*Example 1:*

```sqf
// All objects
[] spawn BIS_fnc_exportEditorPreviews;
```

*Example 2:*

```sqf
// All characters and vehicles. Capturing delay will be 0.5 seconds
[0.5, "vehicles"] spawn BIS_fnc_exportEditorPreviews;
```

*Example 3:*

```sqf
// BLUFOR characters and vehicles
[nil, "vehicles", [west]] spawn BIS_fnc_exportEditorPreviews;
```

*Example 4:*

```sqf
// Props in Karts DLC
[nil, "props", [], ["kart"]] spawn BIS_fnc_exportEditorPreviews;
```

*Example 5:*

```sqf
// All objects in specified addons
[nil, "all", [], [], ["A3_Armor_F_Slammer", "A3_Air_F_Heli_Heli_Transport_03"]] spawn BIS_fnc_exportEditorPreviews;
```

*Example 6:*

```sqf
// BLUFOR characters and vehicles in Marksmen DLC
[nil, "vehicles", [west], ["mark"]] spawn BIS_fnc_exportEditorPreviews;
```

*Example 7:*

```sqf
// Only the B_Soldier_F
[nil, "all", [], [], [], ["B_Soldier_F"]] spawn BIS_fnc_exportEditorPreviews;
```