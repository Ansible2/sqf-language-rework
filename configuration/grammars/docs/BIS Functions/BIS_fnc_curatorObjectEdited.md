Code executed when curator object is edited (i.e., moved or rotated). When a soldier or a vehicle is moved high above ground, create a parachute for them.


---
*Syntaxes:*

[module, object] call `BIS_fnc_curatorObjectEdited`

---
*Example 1:*

```sqf
[ module_curator, someObject ] call BIS_fnc_curatorObjectEdited;
```