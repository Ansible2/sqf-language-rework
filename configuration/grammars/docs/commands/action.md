Make a unit perform an action. See `:Category:Actions` for action names and syntaxes.


---
*Syntaxes:*

unit `action` actionArray

`action` actionArray

---
*Example 1:*

```sqf
player action ["SitDown", player];
```

*Example 2:*

```sqf
_soldier action ["Eject", vehicle _soldier];
```

*Example 3:*

```sqf
player action ["UseWeapon", player, player, 7]; // plays pick up animation before throwing grenade
action ["UseWeapon", player, player, 7]; // normal grenade throw
```