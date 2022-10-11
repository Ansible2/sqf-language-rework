Check if lampost is on (shining).


---
*Example 1:*
```sqf
if (lightIsOn nearestObject [player, "StreetLamp"] == "ON") then { hint "nightime"; };
```

*Example 2:*
```sqf
_it = lightIsOn object 159582;
```

*Example 3:*
```sqf
if (count allMissionObjects "StreetLamp" == 0) then {
	hint "Objects compatible with 'lightIsOn' are not found.";
} else {
	hint "'lightIsOn' compatible objects are found!";
};
```