#### Description:
Rounds off a number to the nearest incriment.

#### Parameters:
0: **_numberToCheck** : *(NUMBER)* - The number to round off

1: **_incriment** : *(NUMBER)* - The incriment by which the number should be assessed

#### Returns:
*(NUMBER)* - The nearest incriment to the given number

#### Examples:
```sqf
// -0.22
_nearestIncriment = [-0.223,0.01] call KISKA_fnc_getNearestIncriment;
```

