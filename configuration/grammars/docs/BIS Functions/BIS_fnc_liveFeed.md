Display a live feed.


---
*Syntaxes:*

[source, target, receiver, effect] call `BIS_fnc_liveFeed`

---
*Example 1:*

```sqf
[myUAV, player, player, 2] call BIS_fnc_liveFeed;
```

*Example 2:*

live feed display:

```sqf
private _UAVFeedDisplay = uiNamespace getVariable "BIS_fnc_PIP_RscPIP";
```