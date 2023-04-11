#### Description:
Provides an updated version of BIS_fnc_ambientAnim in a tighter package that allows for more customization.

#### Parameters:
0: **_units** *(OBJECT[] or OBJECT)* - An array of units or a single unit to animate

1: **_animationParams** *(HASHMAP, STRING[], (STRING,NUMBER)[], or STRING)* - This can be three things:- If a string, a single animation set that is located in the `_animationMap`- If an array, you can have weighted or unweighted array of strings that are random animation sets to select from- lastly, you can have a HASHMAP setup for snap to animations: 
    - `_animSet` *(STRING[], (STRING,NUMBER)[], or STRING)* - A single snapto animation set or weighted/unweighted array to randomly select from.
    - `_snapToRange` *(NUMBER)* - This is how far will be searched around the unit to find an object to "snap" onto. Cannot be more then 10m.
    - `_backupAnims` *(STRING[], (STRING,NUMBER)[], or STRING)* - Same as `_snapToAnimationSet` but for animations to use in the even that 
    ALL of the `_snapToAnimationSet` animations fail to be used due to valid objects not being within range.
    - `_fallbackFunction` *(CODE, ARRAY, or STRING)* - (See `KISKA_fnc_callBack`) In the event that
    a unit is not able to find an object to snap to AND1 no _backupAnims are present, this function will be called with the
    following params. If you still want the unit to be animated in this case, pass `{}`, `""`, or `[]`
        
        - 0: **_unit** *(OBJECT)* - The unit
        - 1: **_unitInfoMap** *(HASHMAP)* - The current state of the _unitInfoMap which stores animation info for the system
        The rest of these params are exactly as passed to the initial KISKA_fnc_ambientAnim call
        - 2: **_animationParams** *(ARRAY, STRING[], (STRING,NUMBER)[], or STRING)*
        - 3: **_exitOnCombat** *(BOOL)*
        - 4: **_equipmentLevel** *(ARRAY or STRING)*
        - 5: **_animationMap** *(HASHMAP or CONFIG)*

2: **_exitOnCombat** *(BOOL)* - True for unit to return to the state it was in prior toKISKA_fnc_ambientAnim being called when they are enter combat behaviour.

3: **_equipmentLevel** *(STRING)* - A quick means of temporarily adjusting a unit's equipment to match a scene. Options:- "": no changes- "NONE": no goggles, headgear, vest, weapon, nvgs, backpack- "LIGHT": no goggles, headgear, vest, backpack- "MEDIUM": no goggles, headgear- "FULL": no goggles

4: **_animationMap** *(HASHMAP or CONFIG)* - See KISKA_fnc_ambientAnim_createMapFromConfigThis is a hashmap that will searched for information for a specific _animSetA config can be passed and will be parsed/cached.

#### Returns:
NOTHING

#### Examples:
```sqf
// exits on combat
[
    someUnit,
    "SIT_GROUND_ARMED",
    true
] call KISKA_fnc_ambientAnim;
```
```sqf
// use animation set SIT_CHAIR_ARMED_2 and snap
// to objects within 10 meters of unit's position
// if no objects that are snappable for SIT_CHAIR_ARMED_2
// are found, unit will use SIT_GROUND_ARMED animation set
[
    someUnit,
    createHashMapFromArray [
        ["_animSet", "SIT_CHAIR_ARMED_2"],
        ["_snapToRange", 10],
        ["_backupAnims","SIT_GROUND_ARMED"]
    ]
] call KISKA_fnc_ambientAnim;
```
```sqf
// STAND_UNARMED_3 is 10x more likely to be used than STAND_ARMED_1
[
    someUnit,
    [
        "STAND_ARMED_1",1,
        "STAND_UNARMED_3",10
    ]
] call KISKA_fnc_ambientAnim;
```

