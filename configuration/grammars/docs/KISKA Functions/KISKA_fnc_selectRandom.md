#### Description:
Selects randomly an entry from an array be it weighted or unweighted.

#### Parameters:
0: **_array** *(ARRAY)* - An array either formatted as [value, weight (number)], or
    just values ([value1,value2])

1: **_valueType** *(ANY)* - A variable that should have the same type as the value
    entries in the array e.g. "" for string, [] for array
    (only needed for possibly weighted arrays)

#### Returns:
*(ANY)* - Random entry from the array

#### Examples:
```sqf
private _randomValue = [[
    "thing1",
    "thing2"
]] call KISKA_fnc_selectRandom;
```
```sqf
private _weight1 = 0.5;
private _weight2 = 0.5;

private _randomWeightedValue = [
    ["thing1", _weight1,
    "thing2", _weight2],
    ""
] call KISKA_fnc_selectRandom;
```

