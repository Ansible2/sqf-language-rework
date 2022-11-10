Initialize inspectable object: add "Inspect" action to the object. When a player activates it, full-screen detail of the objects is shown.


---
*Syntaxes:*

[inspectable, textureInfos, fullScreenText, soundName] call `BIS_fnc_initInspectable`

---
*Example 1:*

```sqf
[myLeaflet, "#(argb,8,8,3)color(1,0,1,1)", "This is some Magic Pink"] call BIS_fnc_initInspectable; // initialize
```

*Example 2:*

```sqf
[myLeaflet, true] call BIS_fnc_initLeaflet; // Show preview instantly
```