#### Description:
Returns the hashmap that contains all logic groups used for ambient animatoins. Users can then reference all the groups with the `values` command. A hashmap was used in order to provide a quicker means of removing entries when a group is deleted as opposed to having to used the `find` command with an array.

#### Parameters:
NONE

#### Returns:
*(HASHMAP)* - A hashmap containing all the logic group

#### Examples:
```sqf
private _map = call KISKA_fnc_ambientAnim_getAttachLogicGroupsMap;
```

