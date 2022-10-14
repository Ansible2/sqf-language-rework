Returns the target assigned to an unit or the vehicle's `effectiveCommander`. The target can be assigned by the group/vehicle/formation leader (as player via [[Arma 3 Field Manual - Commanding#Target_Assignment|quick command menu]] or [[Operation Flashpoint: Commander Guide#TARGET .282.29|"target" complex command menu]]).<br>
To unassign the target use `doWatch` `objNull` or `commandWatch` `objNull` or as player and group leader order "no target" in the [[Operation Flashpoint: Commander Guide#TARGET .282.29|"target" complex command menu]].


---
*Syntaxes:*

`assignedTarget` vehicleName

---
*Example 1:*

```sqf
_target = assignedTarget _T72;
```