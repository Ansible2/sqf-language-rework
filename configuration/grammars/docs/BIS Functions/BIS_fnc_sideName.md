Returns localized side name.
{{Columns|2|
* 0 / `opfor` (`east`) {{=}} "OPFOR"
* 1 / `blufor` (`west`) {{=}} "BLUFOR"
* 2 / `independent` (`resistance`) {{=}} "Independent"
* 3 / `civilian` {{=}} "Civilian"
* 4 / `sideUnknown` {{=}} "Unknown"
* 5 / `sideEnemy` {{=}} "Enemy"
* 6 / `sideFriendly` {{=}} "Friendly"
* 7 / `sideLogic` {{=}} "Game Logic"
* 8 / `sideEmpty` {{=}} "Empty"
* 9 / `sideAmbientLife` {{=}} "Ambient life"
}}


---
*Syntaxes:*

[input] call `BIS_fnc_sideName`

---
*Example 1:*

```sqf
[2] call BIS_fnc_sideName;
```

*Example 2:*

```sqf
[independent] call BIS_fnc_sideName;
```