Initialize hit effects on VR targets.<br>
	<br>grey - undamaged
	<br>orange - damaged
	<br>red - destroyed


---
*Syntaxes:*

[object,time] call `BIS_fnc_VRHitpart`

---
*Example 1:*

```sqf
private _delta = [someObject, 60] call BIS_fnc_VRHitpart;
```