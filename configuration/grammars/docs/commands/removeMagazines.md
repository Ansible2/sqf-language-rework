Removes all magazines of given type from the unit. If magazine class does not exist, nothing happens, not even .rpt message, unlike with `addMagazine` command.


---
*Example 1:*
```sqf
player removeMagazines "30Rnd_556x45_Stanag";
```