Script for para-drop of objects. Spawns waitUntil that handles ground hit (detaching of object from parachute). Used by supplydrop service.


---
*Syntaxes:*

[airUnit,class] spawn `BIS_fnc_supplydrop`

---
*Example 1:*

```sqf
[BIS_airDropVeh, "reammobox"] spawn BIS_fnc_supplydrop;
```