#### Description:
Retrieves the current tracks in the random music system that could play. Possible Values: [NUMBER,NUMBER,NUMBER] - used with the "random" command's [min,mid,max] to get a uniform random space between tracks. [NNUMBER] - used with denotes that the space between tracks can be UP TO this number. NUMBER - the exact time between tracks that will be the same every time.

#### Parameters:
NONE

#### Returns:
*(ARRAY or NUMBER)* - see Description for details

#### Examples:
```sqf
private _interval = call KISKA_fnc_randomMusic_getTrackInterval;
   ```

