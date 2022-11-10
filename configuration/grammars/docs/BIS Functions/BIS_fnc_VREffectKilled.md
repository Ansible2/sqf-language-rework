Delete body of a virtual soldier after he's killed.


---
*Syntaxes:*

[object, instant, delay] call `BIS_fnc_VREffectKilled`

---
*Example 1:*

```sqf
[ player ] call BIS_fnc_VREffectKilled;
```

*Example 2:*

```sqf
[ player, true, 5 ] spawn BIS_fnc_VREffectKilled;
```