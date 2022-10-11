Returns count of occupied role selection slots for given side. Players who claimed a slot in the lobby but did not start the mission are counted as well. If <syntaxhighlight lang="cpp" inline>disabledAI = 0;</syntaxhighlight> in `description.ext` or `Enable AI` option is checked in `Eden Editor`, AI bots will be treated as valid players and will be counted too.


---
*Example 1:*
```sqf
_west = playersNumber west;
_east = playersNumber east;
_civ = playersNumber civilian;
hint format ["West:%1 East:%2, Civ:%3", _west, _east, _civ];
```