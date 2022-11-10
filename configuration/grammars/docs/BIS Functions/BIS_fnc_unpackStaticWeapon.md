This function will move given support team to the given weapon position.
The weapon crew will unpack carried weapon and start watching given target position.
Requires three personnel in the team: Team Leader, Gunner and Asst. Gunner.
This function is MP compatible.<br>
When the weapon is unpacked, the `Arma 3: Scripted Event Handlers#Events|"StaticWeaponUnpacked"` scripted EH is called.


---
*Syntaxes:*

[group, weaponPos, targetPos, leaderPos] call `BIS_fnc_unpackStaticWeapon`

---
*Example 1:*

```sqf
[leader1, "weapon_mrk", "target_mrk"] call BIS_fnc_unpackStaticWeapon;
```

*Example 2:*

```sqf
group1 allowFleeing 0;
[group1, "weapon_mrk", tank1, "leader_mrk"] call BIS_fnc_unpackStaticWeapon;
```