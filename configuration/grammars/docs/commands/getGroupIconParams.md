Returns group icons params used for command bar drawing such as color, text, scale, visibility, waypoint visibility, waypoint color.


---
*Syntaxes:*

`getGroupIconParams` group

---
*Example 1:*

```sqf
_iconParams = getGroupIconParams group player;
```

*Example 2:*

```sqf
getGroupIconParams group player params ["_color", "_text", "_scale", "_visibility", "_WPVisibility", "_WPColor"];
```