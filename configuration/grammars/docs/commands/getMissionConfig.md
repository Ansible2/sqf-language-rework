Returns `Config` entry for the given scenario attribute from the 1st tier. The attribute can be config class or config property. If it is defined in multiple places, the command checks them in the following order:
# External ``Description.ext`` file
# `Eden Editor` scenario attribute
So if attribute exists in both places, attribute from `description.ext` is used. Previously, scenario attributes were extracted from `Description.ext` using `missionConfigFile`. That still works, but it ignores attributes set directly in the editor and it should not be used anymore.


---
*Syntaxes:*

`getMissionConfig` attribute

---
*Example 1:*

```sqf
_header = getMissionConfig "Header";
```
Returns scenario header config. Replaces the previous approach which would scan only the external `Description.ext` file, but ignore the value set in the Eden Editor:

```sqf
_header = missionConfigFile >> "Header"; // Old approach
```