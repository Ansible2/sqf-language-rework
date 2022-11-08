#### Description:
Adds a hold action to an object to teleport to a desired location.

#### Parameters:
0: **_objectToAddTo** *(OBJECT)* - The object the action will be attached to

1: **_teleportPosition** *(ARRAY OR OBJECT)* - The position to be teleported to upon completion

2: **_text** *(STRING)* - The action text, can be structured text

3: **_conditionShow** *(STRING)* - A string that will compile into an expression that
evals to a boolean. True means that the action will be shown.

#### Returns:
*(NUMBER)* - action id, -1 if not added

#### Examples:
```sqf
[player,[0,0,0],"go to the Zero"] call KISKA_fnc_addTeleportAction;
```

