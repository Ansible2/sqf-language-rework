Order the given unit(s) to move to the given location (via the radio). Exactly the same as `doMove`, except this command displays a radio message. The command will not put a visible waypoint marker unlike when move command is given via commanding menu.


---
*Syntaxes:*

unitName `commandMove`  position

---
*Example 1:*

```sqf
_soldier1 commandMove getMarkerPos "Marker1";
```

*Example 2:*

```sqf
[_soldier1, _soldier2] commandMove getMarkerPos "Marker1";
```