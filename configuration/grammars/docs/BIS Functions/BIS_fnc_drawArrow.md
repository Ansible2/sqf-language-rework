Draws a static arrow (outline or color filled) on map. See *(Reference HashLink "#Example 4")* for arrow removal.


---
*Syntaxes:*

[from, to, color, pars, fill, map] call `BIS_fnc_drawArrow`

---
*Example 1:*

Draw a semi-transparent, blue arrow with default geometry:

```sqf
myArrow1 = [_pos1, _pos2, [0,0,1,0.5]] call BIS_fnc_drawArrow;
```

*Example 2:*

Draw a wide, green arrow outline:

```sqf
myArrow2 = [_pos1, _pos2, [0,1,0,1], [20], false] call BIS_fnc_drawArrow;
```

*Example 3:*

Draw a thin, red arrow with custom head geometry:

```sqf
myArrow3 = [_pos1, _pos2, [1,0,0,1], [1,1/5,5]] call BIS_fnc_drawArrow;
```

*Example 4:*

Remove the arrow created in *(Reference HashLink "#Example 3")*:

```sqf
myArrow3 call BIS_fnc_drawArrow;
```

*Example 5:*

```sqf
myArrow1 = [[100,400,0], [200,500,0], [1,0,0,1], [20], true] call BIS_fnc_drawArrow;
myArrow2 = [[400,700,0], [300,600,0], [0,1,0,1], [20, 1/3, 2, 2], true] call BIS_fnc_drawArrow;
myArrow3 = [[600,700,0], [400,900,0], [0,0,1,1], [20, 1/3, 2, 0.5], true] call BIS_fnc_drawArrow;
myArrow4 = [[100,100,0], [200,200,0], [0,0,0,1], [20], false] call BIS_fnc_drawArrow;
myArrow5 = [[400,400,0], [300,300,0], [1,1,1,1], [20, 1/3, 2, 2], false] call BIS_fnc_drawArrow;
myArrow6 = [[600,400,0], [400,600,0], [0,1,1,1], [20, 1/3, 2, 0.5], false] call BIS_fnc_drawArrow;
```