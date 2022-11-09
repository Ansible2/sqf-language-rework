#### Description:
Adds an action to the player that will be activated and deactivated when within a certain radius of a given position.

#### Parameters:
0: **_center** : *(OBJECT or ARRAY)* - The position the player needs to be close to.If array, format as Postion2D or PositionAGL.

1: **_radius** : *(NUMBER)* - The max distance the player can be from the _center toget the action.

2: **_action** : *(ARRAY)* - The action array used with "addAction" command

3: **_refreshInterval** : *(NUMBER)* - How often to look to update action visibility

#### Returns:
*(NUMBER)* - The porximity action id to be used with KISKA_fnc_removeProximityPlayerAction
    (-1 if failure)

#### Examples:
```sqf
[
    cursorObject,
    15,
    ["test",{hint "action"},[]]
] call KISKA_fnc_addProximityPlayerAction
```

