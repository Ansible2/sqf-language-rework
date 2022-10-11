Returns `true` when object is in diver state - e.g when the unit would put diving `goggles` on.
{{Feature|informative|
Diving `goggles` remove blurriness underwater, however when assigned, they do not appear on the face of the unit until the unit steps into the water.
This command allows to detect the moment when the goggles are visible.
If the unit doesn't have diving goggles assigned, this command would still return `true` at appropriate time if the unit steps into the water.


---
*Example 1:*
```sqf
private _gogglesOn = getDiverState player;
```