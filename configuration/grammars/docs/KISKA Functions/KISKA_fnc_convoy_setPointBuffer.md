#### Description:
Sets the minimum distance that must be between each position added to a vehicles drive path. Essentially how often the lead vehicle's position is recorded.

#### Parameters:
0: **_convoyHashMap** *(HASHMAP)* - The convoy hashmap to get the value from

1: **_minBufferBetweenPoints** *(NUMBER)* - The distance between positions in order forthem to be added to the convoy drive path

#### Returns:
NOTHING

#### Examples:
```sqf
[_convoyHashMap,1] call KISKA_fnc_convoy_setPointBuffer;
```

