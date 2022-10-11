Returns mission root plus the filename in a form of filepath to be used with commands requiring absolute path such as [[playSound3D]], [[drawIcon3D]], `createSimpleObject`, etc.
Any leading "\" in the filename will be stripped as the mission root includes one already.


---
*Example 1:*
```sqf
// returns e.g "C:\Users\Username\Documents\Arma 3\missions\MissionName.Altis\icons\myIcon.paa"
private _path = getMissionPath "icons\myIcon.paa";
private _path = getMissionPath "\icons\myIcon.paa"; // leading \ is also fine
```

*Example 2:*
```sqf
// returns e.g "C:\Users\Username\Documents\Arma 3\missions\MissionName.Altis\" with the trailing \
private _root = getMissionPath "";
```