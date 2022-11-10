Used to add an effect to fired bullets. Should be executed from Fired Event Handler.


---
*Syntaxes:*

[unit, nil, nil, nil, ammoType] call `BIS_fnc_effectFiredRifle`

---
*Example 1:*

```sqf
unit addEventHandler ["Fired", 
{
   _this call BIS_fnc_effectFiredRifle;
}];
```