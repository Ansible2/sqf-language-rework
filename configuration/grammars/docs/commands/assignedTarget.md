Returns the target assigned to an unit or the vehicle's `effectiveCommander`. The target can be assigned by the group/vehicle/formation leader (as player via [[Arma 3 Field Manual - Commanding#Target_Assignment|quick command menu]] or [[Operation Flashpoint: Commander Guide#TARGET .282.29|"target" complex command menu]]).<br>
To unassign the target use `doWatch` `objNull` or `commandWatch` `objNull` or as player and group leader order "no target" in the [[Operation Flashpoint: Commander Guide#TARGET .282.29|"target" complex command menu]].
{{Feature | Informative |
* This command does not return the target a unit is actually engaging ("attack unit"). For this information, see `getAttackTarget`.
* If a player is inside a vehicle as the `effectiveCommander`, the vehicle's crew assignedTarget will always be `objNull`.


---
*Example 1:*
```sqf
_target = assignedTarget _T72;
```