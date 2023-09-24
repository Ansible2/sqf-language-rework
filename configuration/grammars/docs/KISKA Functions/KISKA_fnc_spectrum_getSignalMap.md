#### Description:
Returns a map of all the signals and their corresponding ids that have been added on the local machine.

#### Parameters:
NONE

#### Returns:
*(HASHMAP<STRING,ARRAY)*> - A hashmap where a signal id as key will provide an
 array of that signals base properties:

 - 0. *(NUMBER)* : The frequency of the signal in MHz
 - 1. *(PositionASL[])* : The position of the signal
 - 2. *(NUMBER)* : The base signal decibel level when when near the origin
 - 3. *(NUMBER)* : The max distance that the signal can be seen on the spectrum analyzer

#### Examples:
```sqf
private _signalMap = call KISKA_fnc_spectrum_getSignalMap;
```

