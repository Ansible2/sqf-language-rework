Add curator editing / camera area based on triggers.


---
*Syntaxes:*

[curatorLogic, triggers, checkedPosition, triggerType, editingArea, cameraArea] call `BIS_fnc_addCuratorAreaFromTrigger`

---
*Example 1:*

```sqf
[BIS_curator, [trigger_1,trigger_2], [0,0,0], true, true, true] call BIS_fnc_addCuratorAreaFromTrigger;
```