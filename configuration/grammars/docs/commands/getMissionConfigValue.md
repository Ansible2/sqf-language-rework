Returns value of the given scenario attribute from the 1st tier. Since only config properties have values, the attribute should be config property. If it is not found or config class is given, the return is `nil`. If the attribute defined in multiple places, the command checks them in the following order:
# External ``Description.ext`` file
# `Eden Editor` scenario attribute
So if attribute exists in both places, attribute from `description.ext` is used. Previously, scenario attributes were extracted from `Description.ext` using `missionConfigFile`. That still works, but it ignores attributes set directly in the editor and it should not be used anymore.<br><br>


---
*Example 1:*
```sqf
_respawnDelay = getMissionConfigValue ["respawnDelay",0];
```
Returns respawn delay value. Replaces the previous approach which would scan only the external `Description.ext file`, but ignore the value set in the Eden Editor:

```sqf
_respawnDelay = getNumber (missionConfigFile >> "respawnDelay"); // Old approach
```