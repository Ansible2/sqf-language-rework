Display a resource defined in RscTitles of the mission's `Description.ext`, the campaign's description.ext or the global config.


---
*Syntaxes:*

`cutRsc` [class, effect, speed, showInMap]

layer `cutRsc` [class, effect, speed, showInMap]

---
*Example 1:*

```sqf
cutRsc ["binocular", "PLAIN"];
cutRsc ["binocular", "PLAIN", 2];
cutRsc ["binocular", "PLAIN", 2, false];
```

*Example 2:*

```sqf
2 cutRsc ["binocular", "PLAIN", 2];
```

*Example 3:*

```sqf
_layer = "layer1" cutRsc ["binocular", "PLAIN", 2];
```

*Example 4:*

```sqf
// create IGUI display
// such display can be closed with closeDisplay command or by overwriting the same cut layer with another output.
// note that "Unload" EH for some reason does not work with such display.
"someLayer" cutRsc ["RscTitleDisplayEmpty", "PLAIN"];
private _display = uiNamespace getVariable "RscTitleDisplayEmpty";
```