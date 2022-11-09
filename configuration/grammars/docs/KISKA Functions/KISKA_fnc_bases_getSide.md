#### Description:
Selects the most specific config's infantryClasses property and returns its value.

#### Parameters:
0: **_configClasses** *(ARRAY)* - An array of CONFIGs to select the "side" property fromThat will be converted from a number in the side

#### Returns:
*(SIDE)* - The returned side for the given configs

#### Examples:
```sqf
[
    [
        missionConfigFile >> "KISKA_Bases" >> "myBase"
        missionConfigFile >> "KISKA_Bases" >> "myBase" >> "Infantry",
        missionConfigFile >> "KISKA_Bases" >> "myBase" >> "Infantry" >> "myInfantryClass"
    ]
] call KISKA_fnc_bases_getSide;
```

