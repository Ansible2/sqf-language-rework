Disables respawn loadout, role or position for `Arma 3: Respawn`.
* Only role or only loadout can be limited at one moment, if there is limit for both, then only role uses limit.
* If the limit definition for role is called multiple times with different numbers, then the highest number is used. 
* If disabling a position then respawnReference must be supplied


---
*Syntaxes:*

[mode, uiControl, listboxItem, message, respawnReference] call `BIS_fnc_showRespawnMenuDisableItem`

---
*Example 1:*

```sqf
[
	"disable",
	uiNamespace getVariable "BIS_RscRespawnControlsMap_ctrlLocList",
	2,
	"Restricted for this part of mission!",
	myRespawnModule call BIS_fnc_objectVar
] call BIS_fnc_showRespawnMenuDisableItem;
```