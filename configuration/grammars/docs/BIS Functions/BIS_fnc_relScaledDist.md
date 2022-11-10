Exponentially inflated rational number between 0 and 1, with 1 being center and 0 being edge of the trigger. This function can be used to check where in a trigger area an object is. Is it near the border of the trigger area the number will go against 0.


---
*Syntaxes:*

[referenceObject, relativeObject] call `BIS_fnc_relScaledDist`

---
*Example 1:*

```sqf
[ myTrigger, player ] call BIS_fnc_relScaledDist;
```