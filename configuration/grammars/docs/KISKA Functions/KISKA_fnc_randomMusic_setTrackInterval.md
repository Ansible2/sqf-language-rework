#### Description:
Sets the dwell time variable that handles the time between random music tracks being played.

#### Parameters:
0: **_interval** *(ARRAY or NUMBER)* - A random or set time between tracks.
    Formats are [min,mid,max] & [max] for random numbers and just a single
     number for a set time between.

#### Returns:
*(BOOL)* - true if updated, false if not

#### Examples:
```sqf
[20] remoteExecCall ["KISKA_fnc_randomMusic_setTrackInterval",2];
```

