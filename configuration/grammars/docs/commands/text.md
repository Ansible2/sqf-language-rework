Creates a structured text containing the given plain text if argument is `String`. Use `setAttributes` to set additional ` attributes` on the text. If the argument is `location`, returns location's text value (see Alt Syntax).


---
*Example 1:*
```sqf
_stxt2 = text "Hello world.";
```

*Example 2:*
```sqf
_townName = text myTownLocation;
```

*Example 3:*
```sqf
_loc = text nearestLocation [position player, "NameMarine"]; //"Marina Bay"
```