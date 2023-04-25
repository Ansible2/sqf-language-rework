#### Description:
Selects the most specific config's infantryClasses property and returns its value.

#### Parameters:
0: **_configClasses** *(ARRAY)* - An array of CONFIGs to select the "infantryClasses"property from. If a string, value is found, it will be treated as a functionthat should return an array of classnames.

#### Returns:
*(ARRAY)* - An array of STRING class names

#### Examples:
```sqf
[
    [
        missionConfigFile >> "KISKA_Bases" >> "myBase",
        missionConfigFile >> "KISKA_Bases" >> "myBase" >> "Infantry",
        missionConfigFile >> "KISKA_Bases" >> "myBase" >> "Infantry" >> "myInfantryClass"
    ]
] call KISKA_fnc_bases_getInfantryClasses;
```

