Object speed (in km/h). Returns relative speed of given object along Y axis. An equivalent to: <sqf inline>3.6 * (velocityModelSpace _obj select 1)</sqf>


---
*Example 1:*
```sqf
if (speed _truck1 >= 100) then { hint "You're going too fast!" };
```