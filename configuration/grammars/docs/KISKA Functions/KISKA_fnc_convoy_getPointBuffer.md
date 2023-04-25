#### Description:
Gets the minimum distance that must be between each position added to a vehicles drive path. Essentially how often the lead vehicle's position is recorded.

#### Parameters:
0: **_convoyHashMap** *(HASHMAP)* - The convoy hashmap to get the value from

#### Returns:
*(NUMBER)* - The minimum distance between each drive path point

#### Examples:
```sqf
private _minBufferBetweenPoints = [
    _convoyHashMap
] call KISKA_fnc_convoy_getPointBuffer;
```

