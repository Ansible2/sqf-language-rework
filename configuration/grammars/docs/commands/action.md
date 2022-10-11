Make a unit perform an action. See `:Category:Actions` for action names and syntaxes.
{{Feature | informative |
* in singleplayer, when user Alt-Tabs the simulation is paused and so the action will also halt until user returns to the game. For example, <sqf inline>player action ["GetInDriver", car];</sqf> executed while user is Alt-Tabbed will result in the user seeing the action happening when he returns to the game screen. This doesn't happen in Multiplayer.
* the alternative syntax creates a temporary Logic entity in place of `unit`.


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