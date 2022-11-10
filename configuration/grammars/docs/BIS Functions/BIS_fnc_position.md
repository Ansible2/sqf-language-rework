Returns `PositionAGL`, unless passed argument is `Array`, then the same array is returned. When position is `Object` and alternative position is stored in **"BIS_fnc_position_forced"** variable on this object, the stored position is used rather than actual object position. This function is a pretty safe way to get the position of an entity.


---
*Syntaxes:*

argument call `BIS_fnc_position`

---
*Example 1:*

```sqf
private _pos = player call BIS_fnc_position;
```