#### Description:
Takes a layer of objects and produces an array of arrays that are their 3d ATL position and current direction ([0,0,0,0]). Can also convert the arrays to config compatible format. This will copy its output to the clipboard if run on the server;

#### Parameters:
0: **_layer** *(STRING or NUMBER)* - The name of the layer or if in 3den, its layer id

1: **_convertToConfig** *(BOOL)* - Change all square brackets ([]) to curly ({})

#### Returns:
<STRING> - The converted Array

#### Examples:
```sqf
["someLayer",true] call KISKA_fnc_exportSpawnPositions;
```

