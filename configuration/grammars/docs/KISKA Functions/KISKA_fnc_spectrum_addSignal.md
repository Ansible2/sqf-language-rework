#### Description:
Adds a signal that can be seen on a spectrum device.

#### Parameters:
0: **_signalProperties** : *(ARRAY)* - The all the properites of the signal`_signalProperties` Layout:- 0: **_frequency** *(NUMBER)* - The frequency of the signal in MHz- 1: **_origin** *(OBJECT or PositionASL[])* - The position of the signal- 2: **_decibels** *(NUMBER)* - The base signal decibel level when when near the origin- 3: **_maxDistance** *(NUMBER)* - The max distance that the signal can be seen on the spectrumanalyzer. This will be what governs how the signal strength increases/decreases dependingon the user's position. Default is `worldSize`.

1: **_global** : *(BOOL)* - `true` to broadcast the changes to all machines including JIP

#### Returns:
*(STRING)* - The corresponding ID for the signal

#### Examples:
```sqf
private _signalId = [
    [100,[0,0,0],100]
] call KISKA_fnc_spectrum_addSignal;
```

