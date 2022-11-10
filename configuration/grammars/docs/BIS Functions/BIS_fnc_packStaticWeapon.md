This function will make weapon team pack a static weapon. The weapon crew will pack carried weapon (or given weapon if different) and follow leader. Requires three personnel in the team: Team Leader, Gunner and Asst. Gunner. This function is MP compatible
<br><br>
When the weapon is packed, scripted EH "StaticWeaponPacked" is called with the following params: 
* [group, leader, gunner, assistant, weaponBag, tripodBag]


---
*Syntaxes:*

[group, weapon, leaderPos] call `BIS_fnc_packStaticWeapon`

---
*Example 1:*

```sqf
[leader1] call BIS_fnc_packStaticWeapon;
```

*Example 2:*

```sqf
group1 allowFleeing 0;
[group1, nil, "leaderpos_marker"] call BIS_fnc_packStaticWeapon;
```