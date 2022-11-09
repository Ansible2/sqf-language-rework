#### Description:
Picks the most specific unitTypes property from a list of configs.

#### Parameters:
0: **_property** *(STRING)* - The config property to search for in all of the classes

1: **_configs** *(ARRAY)* - An array of CONFIGs that you would like to look for theproperty. These should be within the same configHierarchy.

2: **_ignoredValues** *(ARRAY of ARRAY, NUMBER, or STRING)* - A list of invalid valuesfor the property to have in order to be ignored. (strings should be lowercase)(NIL will always be ignored)

3: **_ignoredTypes** *(ARRAY of ARRAY, NUMBER, or STRING)* - A list of invalid types for the property

#### Returns:
*(NIL, ARRAY, NUMBER, or STRING)* - The config value returned by the most specific config passed
    that is valid.

#### Examples:
```sqf
private _valueFromMostSpecificClass = [
    "myProperty"
    [
        missionConfigFile >> "SomeClass",
        missionConfigFile >> "SomeClass" >> "SomeSubClass",
        missionConfigFile >> "SomeClass" >> "SomeSubClass" >> "SomeFurtherSubClass",
    ],
    [""], // shouldn't be an empty string,
    [123] // ignore number properties
] call KISKA_fnc_getMostSpecificCfgValue;
```

