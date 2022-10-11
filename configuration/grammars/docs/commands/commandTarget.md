Order the given unit(s) to target the given target (via the radio). Command given to the player, puts a red square with words Target and Distance on player's HUD at target location. If player in vehicle and has radar facilities, it also adds target marker to the radar.


---
*Example 1:*
```sqf
_ESoldier1 commandTarget _WSoldier1;
```

*Example 2:*
```sqf
player commandTarget [ted, bill];
```