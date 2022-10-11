Returns entity's weapons information including weapon index and firemode.


---
*Example 1:*
Find weapon with FullAuto firemode and switch to it: 
```sqf
private _weapons = player weaponsInfo [currentMuzzle player, true];
private _found = _weapons findIf { _x select 4 == "FullAuto" };
if (_found > -1) then { action ["SwitchWeapon", player, player, _weapons select _found select 0] };
```