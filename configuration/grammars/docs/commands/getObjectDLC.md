Returns appID of the DLC the object belongs to or `nil` if object is vanilla.


---
*Example 1:*
```sqf
_appID = getObjectDLC cursorTarget;
if (!isNil "_appID") then {
	hint format ["This object belongs to DLC with id: %1", _appID];
} else {
	hint "This object is vanilla";
};
```

*Example 2:*
```sqf
_akm = createSimpleObject ["A3\Weapons_F_Exp\Rifles\AKM\AKM_F.p3d",getPosASL player];
getObjectDLC _akm;	// 395180
```