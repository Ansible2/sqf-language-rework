#### Description:
Provides an updated version of BIS_fnc_ambientAnim in a tighter package that allows for more customization.

#### Parameters:
0: **_units** *(ARRAY or OBJECT)* - An array of units or a single unit to animate

1: **_animSet** *(ARRAY or STRING)* - An array of animation set names (strings) that are located in the_animationMap or a single animation set. The array can be weighted or unweighted.(see selectRandomWeighted single array syntax)

2: **_exitOnCombat** *(BOOL)* - True for unit to return to the state it was in prior toKISKA_fnc_ambientAnim being called when they are enter combat behaviour.

3: **_equipmentLevel** *(STRING)* - A quick means of temporarily adjusting a unit's equipmentto match a scene. Options:- "": no changes- "NONE": no goggles, headgear, vest, weapon, nvgs, backpack- "LIGHT": no goggles, headgear, vest, backpack- "MEDIUM": no goggles, headgear- "FULL": no goggles

4: **_snapToRange** *(NUMBER)* - Certain animations (such as sitting in a chair) canbe configured to orient the unit onto certain object types. This is how farwill be searched around the unit to find an object to "snap" onto. Cannot be more then 10m.

5: **_fallbackFunction** *(CODE, ARRAY, or STRING)* - (See KISKA_fnc_callBack) In the event thata unit is not able to find an object to snap to, this function will be called with thefollowing params. If you still want the unit to be animated in this case, pass {}, "", or [].
    0. _animSetSelection *(STRING)* - The animation that failed to find a snap to object
    1. _unit *(OBJECT)* - The unit
    // the rest of these params are exactly as passed to the initial KISKA_fnc_ambientAnim call
    2. _animSet *(ARRAY or STRING)*
    3. _exitOnCombat *(BOOL)*
    4. _equipmentLevel *(ARRAY or STRING)*
    5. _snapToRange *(NUMBER)*
    6. _fallbackFunction *(CODE, ARRAY, or STRING)*
    7. _animationMap *(HASHMAP or CONFIG)*

6: **_animationMap** *(HASHMAP or CONFIG)* - See KISKA_fnc_ambientAnim_createMapFromConfigThis is a hashmap that will searched for information for a specific _animSet_animset. A config can be passed and will be parsed/cached.

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
[
    someUnit,
    "SIT_GROUND_UNARMED"
] call KISKA_fnc_ambientAnim;
```

