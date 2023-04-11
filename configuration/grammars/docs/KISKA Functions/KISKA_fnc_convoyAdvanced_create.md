#### Description:
Creates an advanced KISKA convoy. Vehicles should be already physically placed in the order that they intend to travel in. If creating in an urban setting, ensure vehicles are in a straight line so that they do not initially crash into a building. This will create a CBA statemachine that processes one vehicle a frame. It manages the speed of the vehicle relative to the vehicle in front to keep a desired spacing between them. The space between each vehicle can be customized for that specific vehicle or any individual one. The first vehicle added to the convoy WILL NOT have its movement managed in any capacity. All other vehicles will essentially follow the path of the lead vehicle. You should limit the speed and control the path of the lead vehicle for your specific use case.

#### Parameters:
0: **_vics** *(OBJECT[])* - An array of convoy vehicles (that are in their travel order)

1: **_convoySeperation** *(NUMBER)* - The distance between each vehicle for the convoy (min of 10)

#### Returns:
*(HASHMAP)* - A hash map containing data pertinent to the convoy's operation

#### Examples:
```sqf
private _convoyHashMap = [
    [],
    10
] call KISKA_fnc_convoyAdvanced_create;
```

