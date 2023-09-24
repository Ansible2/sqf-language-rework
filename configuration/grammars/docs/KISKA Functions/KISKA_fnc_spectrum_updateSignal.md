#### Description:
Updates a signal's base properties for the local machine or creates it if it did not exist prior. It is not recommended to directly create a signal with this function. Rather use `KISKA_fnc_spectrum_addSignal`. WARNING, this function updats ALL base properties. Meaning if you intend to a single property, use the corresponding setter function. For example, to update the origin position only and not every signal property, use `KISKA_fnc_spectrum_setSignalPosition`.

#### Parameters:
0: **_signalProperties** : *(ARRAY)* - The all the properites of the signal`_signalProperties` Layout:- 0: **_id** *(STRING)* - The id of the signal to update- 1: **_frequency** *(NUMBER)* - The frequency of the signal in MHz- 2: **_origin** *(OBJECT or PositionASL[])* - The position of the signal- 3: **_decibels** *(NUMBER)* - The base signal decibel level when when near the origin- 4: **_maxDistance** *(NUMBER)* - The max distance that the signal can be seen on the spectrum analyzer

1: **_global** : *(BOOL)* - `true` to broadcast the changes to all machines including JIP

#### Returns:
*(HASHMAP)* - Signal's updated property map:

- `_frequency`: *(NUMBER)* - The frequency of the signal in MHz
- `_origin`: *(PositionASL[])* - The position of the signal
- `_maxDistance`: *(NUMBER)* - The maximum distance the signal can be seen on the analyzer
- `_decibels`: *(NUMBER)* - The max decibel level when the analyzer is directly on top of the origin

#### Examples:
```sqf
// should use KISKA_fnc_spectrum_updateSignal for snyched updates
// but if you only want a subset of machines:
[
    [
        "KISKA_spectrumSignal_2_1",
        100,
        [0,0,0],
        100
    ],
    false
] remoteExecCall [
    "KISKA_fnc_spectrum_updateSignal",
    [3,4]
];
```
```sqf
// broadcast to all machines by default
[
    [
        "KISKA_spectrumSignal_2_1",
        100,
        [0,0,0],
        100
    ]
] call KISKA_fnc_spectrum_updateSignal;
```

