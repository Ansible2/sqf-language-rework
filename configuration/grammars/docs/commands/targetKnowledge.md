Returns unit's knowledge about target.


---
*Example 1:*
```sqf
private _allInfo = _soldierOne targetKnowledge _jeepOne;
_allInfo params ["_knownByGroup", "_knownByUnit", "_lastSeen", "_lastThreat", "_side", "_errorMargin", "_position"];
```

*Example 2:*
```sqf
private _posError = (_soldierOne targetKnowledge _jeepOne) select 5;
```