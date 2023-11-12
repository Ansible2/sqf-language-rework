#### Description:
Takes an array or strings, where each string must end with an underscore and a digit (`"something_1"`) and can handle one extra sub level digit (`"something_1_1"`).

#### Parameters:
0: **_strings** *(STRING[])* - Default: `[]` - The strings you would like to sort

1: **_order** *(BOOLEAN)* - Default: `true` - ascending (`true`) or descending (`false`)

#### Returns:
*(STRING[])* - The sorted list of strings

#### Examples:
```sqf
[
    ["myString_2","myString_3","myString_1_1","myString_1"]
] call KISKA_fnc_sortStringsNumerically;
// returns -> `["myString_1","myString_1_1","myString_2","myString_3"]`
```

