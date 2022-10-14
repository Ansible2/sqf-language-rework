Returns true if the vehicle has its laser turned on. Not to be confused with `isIRLaserOn` which is for units. Main syntax is for primary gunner turret.


---
*Syntaxes:*

`isLaserOn` entity

vehicle `isLaserOn` turret

---
*Example 1:*

```sqf
if (isLaserOn _vehicle) then { hint "target ready" };
```