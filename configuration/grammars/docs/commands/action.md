Make a unit perform an action. See Actions for action names and syntaxes.

**NOTES:**
- In singleplayer, when user Alt-Tabs the simulation is paused and so the action will also halt until user returns to the game. For example, `player action ["GetInDriver", car];` executed while user is Alt-Tabbed will result in the user seeing the action happening when he returns to the game screen. This doesn't happen in Multiplayer.
- The alternative syntax creates a temporary Logic entity in place of unit.
- The argument's locality is usually local, but some actions can take a global argument (e.g "Eject", "GetOut", "GetInXXXX", "MoveToXXXX"). See [Actions](https://community.bistudio.com/wiki/Category:Actions) for more details.

---
*Example 1*

```sqf
player action ["SitDown", player];
```

*Example 3*

```sqf
_soldier action ["Eject", vehicle _soldier];
```

*Example 3*

```sqf
// plays pick up animation before throwing grenade
player action ["UseWeapon", player, player, 7]; 
// normal grenade throw
action ["UseWeapon", player, player, 7]; 
```