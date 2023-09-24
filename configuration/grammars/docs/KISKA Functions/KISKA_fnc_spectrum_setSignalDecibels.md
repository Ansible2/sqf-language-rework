#### Description:
Sets the signal's decibel level. NOTE: If you intend to update more than one property of a signal, use `KISKA_fnc_spectrum_updateSignal` as it is more efficient.

#### Parameters:
0: **_id** : *(STRING)* - The id of the signal to update

1: **_decibels** : *(NUMBER)* - The max decibel level when the analyzer is directly on top of the origin

2: **_global** : *(BOOL)* - `true` to broadcast the change to all machines including JIP (default: `true`)

#### Returns:
*(HASHMAP)* - Signal's updated property map:

- `_frequency`: *(NUMBER)* - The frequency of the signal in MHz
- `_origin`: *(PositionASL[])* - The position of the signal
- `_maxDistance`: *(NUMBER)* - The maximum distance the signal can be seen on the analyzer
- `_decibels`: *(NUMBER)* - The max decibel level when the analyzer is directly on top of the origin

#### Examples:
```sqf
["KISKA_spectrumSignal_2_1",-100] call KISKA_fnc_spectrum_setSignalDecibels;
```

